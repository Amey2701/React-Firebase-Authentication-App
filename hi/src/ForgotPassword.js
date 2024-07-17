// ForgotPassword.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import NavBar from "./NavBar";
import app from "./Firebase";

function ForgotPassword() {
    const [username, setUsername] = useState("");
    const hUsername = (event) => { setUsername(event.target.value); };

    const nav = useNavigate();
    useEffect(() => {
        let un = localStorage.getItem("username");
        if (un != null) nav("/home");
    }, [nav]);

    const submit = (event) => {
        event.preventDefault();
        const auth = getAuth();
        sendPasswordResetEmail(auth, username)
            .then(res => nav("/"))
            .catch(err => alert("Issue: " + err));
    };

    return (
        <>
            <center>

                <h1>Forgot Password Page</h1>
                <form onSubmit={submit}>
                    <input type="email" placeholder="Enter Registered Email" onChange={hUsername} />
                    <br /><br />
                    <input type="submit" value="Reset" />
                </form>
            </center>
        </>
    );
}

export default ForgotPassword;
