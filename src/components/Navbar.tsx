import "../styles/global.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <Link to="/" className = "nav-item">Site name</Link>
            <Link to="/" className = "nav-item">Projects</Link>
            <Link to="/contact" className = "nav-item">Contact</Link>
        </nav>
    );
}