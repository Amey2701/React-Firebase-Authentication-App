// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import ChangePassword from './ChangePassword';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import Signup from './Signup';
import { useEffect, useState } from 'react';
import './App.css'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('username');
        setIsLoggedIn(!!username); // Update state based on username presence
    }, []);

    return (
        <Router>
            <div>
            <NavBar isLoggedIn={isLoggedIn} />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cp" element={<ChangePassword />} />
                    <Route path="/fp" element={<ForgotPassword />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
