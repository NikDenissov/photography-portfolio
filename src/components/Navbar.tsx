import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <Link to="/">Site name</Link>
            <Link to="/">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}