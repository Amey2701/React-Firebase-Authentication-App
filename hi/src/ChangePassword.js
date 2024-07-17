// ChangePassword.js
import React, { useEffect, useRef, useState } from 'react';
import { getAuth, updatePassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
    const nav = useNavigate();

    const rPassword1 = useRef();
    const rPassword2 = useRef();

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [msg, setMsg] = useState('');

    const hPassword1 = (event) => setPassword1(event.target.value);
    const hPassword2 = (event) => setPassword2(event.target.value);

    const change = (event) => {
        event.preventDefault();
        if (password1 !== password2) {
            setMsg("Passwords don't match.");
            return;
        }

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                updatePassword(user, password1)
                    .then(() => {
                        localStorage.removeItem('username');
                        nav('/');
                    })
                    .catch((err) => setMsg('Issue: ' + err.message));
            } else {
                nav('/login');
            }
        });
    };

    useEffect(() => {
        let username = localStorage.getItem('username');
        if (!username) {
            nav('/login');
        }
    }, [nav]);

    return (
        <div>
            <center>
                
                <h1>Change Password Page</h1>
                <form onSubmit={change}>
                    <input
                        type="password"
                        placeholder="Enter New Password"
                        onChange={hPassword1}
                        ref={rPassword1}
                        value={password1}
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        onChange={hPassword2}
                        ref={rPassword2}
                        value={password2}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Change Password" />
                </form>
                <h2>{msg}</h2>
            </center>
        </div>
    );
}

export default ChangePassword;
