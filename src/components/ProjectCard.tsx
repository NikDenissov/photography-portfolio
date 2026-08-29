import "../styles/global.css";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

type ProjectProperties = {
    project: {
        slug: string;
        title: string;
        coverImage: string;
    };
};

export function ProjectCard({ project } : ProjectProperties) {
    return (
        <Link to={`/projects/${project.slug}`} className = "project-card" key={`project-link-${project.slug}`}>
            <img src={project.coverImage} alt={project.title} />
            <p>{project.title}</p>
        </Link>
    )
}