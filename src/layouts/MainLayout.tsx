import "../styles/global.css";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function MainLayout() {
    return (
        <div className="layout">
            <Navbar />

            <main className="main">
                <Outlet />
            </main>

            <footer>
                {/* Footer will be added later */}
            </footer>
        </div>
    )
}