import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql2 from 'mysql2';
import bcrypt from 'bcrypt';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Skh@23092005',
  database: 'inspirenet'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  if (!username || !email || !password) {
    return res.status(400).send('Missing fields');
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  db.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, hashedPassword],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Database error');
      }
      res.send('Signup successful!');
    }
  );
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed.", err);
    process.exit(1);
  } else {
    console.log("Connected to the database.");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
});