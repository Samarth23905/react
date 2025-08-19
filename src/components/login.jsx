import React from "react";
import Inputs from "./input.jsx";

function Login() {
    return (
        <form>
            <Inputs type="text" placeholder="Username" required={true} />
            <Inputs type="password" placeholder="Password" required={true} />
            <button type="submit">Login</button>
        </form>
    );
}
