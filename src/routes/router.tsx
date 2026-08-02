import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ContactPage } from "../pages/ContactPage";
import { ProjectDetailsPage } from "../pages/ProjectDetailsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <ProjectsPage />
            },
            {
                path: "projects/:slug",
                element: <ProjectDetailsPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            }
        ]
    }
]);