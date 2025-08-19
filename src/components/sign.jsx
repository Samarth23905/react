import React from "react";
import Inputs from "./input.jsx";

function SignUp() {
    return (
        <form action="/signup" method="POST">
            <Inputs name="username" type="text" placeholder="Username" required={true} />
            <Inputs name="email" type="email" placeholder="Email" required={true} />
            <Inputs name="password" type="password" placeholder="Password" required={true} />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUp;
