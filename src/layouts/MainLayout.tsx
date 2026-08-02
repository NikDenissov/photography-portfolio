import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function MainLayout() {
    return (
        <div>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <footer>
                {/* Footer will be added later */}
            </footer>
        </div>
    )
}