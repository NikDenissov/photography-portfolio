import {Link} from "react-router-dom";
import "./ProjectsPage.css";

// Example photos
const photos = import.meta.glob("../assets/photos/*.{jpg,jpeg,png,webp,JPG}",
    {eager: true, query: "?url", import: "default",});

export function ProjectsPage() {
    const photoHrefs = Object.values(photos);
    const projectName = "countryside-home";
    
    return (
        <div className = "projects-grid">
            {
                photoHrefs.map((photoHref) => (
                    <Link to={`/projects/${projectName}`} className = "project-card" key={photoHref}>
                        <img src={photoHref} alt=""/>
                        <p>Project Name</p>
                    </Link>
                ))
            }
        </div>
    )
}