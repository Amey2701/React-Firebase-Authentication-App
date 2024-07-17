import React, { useState, useRef} from 'react';
import { getAuth ,createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Signup() {

    const nav = useNavigate();

    useEffect(() => {
        let un = localStorage.getItem("username");
        if (un != null)
            nav("/home");
    },[nav]);

    const rUsername = useRef();
    const rPassword1 = useRef();
    const rPassword2 = useRef();

    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [msg, setMsg] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('');

    const hUsername = (event) => { setUsername(event.target.value); };
    const hPassword1 = (event) => { setPassword1(event.target.value); };
    const hPassword2 = (event) => { setPassword2(event.target.value); };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        return regex.test(password);
    };

    const save = (event) => {
        event.preventDefault();
        
        if (username === "") {
            alert("You did not enter an email");
            rUsername.current.focus();
            return;
        }

        if (password1 === "") {
            alert("You did not enter a password");
            setMsg("");
            rPassword1.current.focus();
            return;
        }

        if (password2 === "") {
            alert("You did not enter a password");
            setMsg("");
            rPassword2.current.focus();
            return;
        }

        if (!validatePassword(password1)) {
            setPasswordMsg(
                <p className="password-conditions">
                    Password must:
                    <ul>
                        <li>8-16 characters</li>
                        <li>1 uppercase letter</li>
                        <li>1 lowercase letter</li>
                        <li>1 number</li>
                        <li>1 special character</li>
                    </ul>
                </p>
            );
            return;
        }        

        if (password1 === password2) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth,username,password1)
            .then(res => nav("/login"))
            .catch(err => setMsg("Issue" + err));
        }
        else 
        {
            setMsg("Password did not match");
            setPassword1("");
            setPassword2("");
            rPassword1.current.focus();
        }
    }

    return (
        <div>
            <center>
                <h1>Signup Page</h1>
                <form onSubmit={save}>
                    <input type="email" placeholder="Enter your Email" onChange={hUsername} ref={rUsername} value={username} />
                    <br /><br />
                    
                    <input type="password" placeholder="Enter Password" onChange={hPassword1} ref={rPassword1} value={password1} />
                    <br /><br />
                    
                    <input type="password" placeholder="Re-enter Password" onChange={hPassword2} ref={rPassword2} value={password2} />
                    <br /><br />
                    <input type="submit" value="Register" />
                </form>
                <h2>{msg}</h2>
                <h3>{passwordMsg}</h3>
            </center>
        </div>
    );
}

export default Signup;
