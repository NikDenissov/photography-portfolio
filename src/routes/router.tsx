import { createBrowserRouter } from "react-router-dom";
import ProjectsPage from "../pages/ProjectsPage"
import ContactPage from "../pages/ContactPage"
import ProjectDetailsPage from "../pages/ProjectDetailsPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProjectsPage />
    },
    {
        path: "/contact",
        element: <ContactPage />
    },
    {
        path: "/projects/:slug",
        element: <ProjectDetailsPage />,
    }
]);