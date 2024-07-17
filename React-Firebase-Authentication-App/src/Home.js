// Home.js
import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const nav = useNavigate();
    const[msg,setMsg] = useState("");

    useEffect(() => {
        let un = localStorage.getItem("username");
        if (un === null) {
            nav("/"); // Redirect to login page if username is not found in localStorage
        }
        else
        {
            setMsg("Welcome " + un);
        }
    }, [nav]);

    const lo = (event) => {
        event.preventDefault();
        localStorage.removeItem.apply("username");
        nav("/login");
    }

    return (
        <>
            <center>
               
                <h1>Home Page</h1>
                <h2>{msg}</h2>
                
            </center>
        </>
    );
}

export default Home;
