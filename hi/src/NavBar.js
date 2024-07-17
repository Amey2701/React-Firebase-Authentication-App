import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
    const [username, setUsername] = useState(null);
    const location = useLocation(); // Get the current location

    useEffect(() => {
        setUsername(localStorage.getItem("username")); // Set username from localStorage on component mount
    }, []);

    const isAuthPage = ["/", "/signup", "/fp"].includes(location.pathname);

    return (
        <div className="nav">
            {/* Render navigation links based on current location */}
            {isAuthPage ? (
                <>
                    <Link to="/">Login</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/fp">Forgot Password</Link>
                </>
            ) : (
                <>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/cp">Change Password</Link>
                    <Link to="/" onClick={() => { localStorage.removeItem("username"); }}>Logout</Link>
                </>
            )}
        </div>
    );
}

export default NavBar;
