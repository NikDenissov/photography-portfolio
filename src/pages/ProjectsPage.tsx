import "./ProjectsPage.css";
import { ProjectCard } from "../components/ProjectCard.tsx";
import { projects } from "../mock-data/projectsData.ts";

export function ProjectsPage() {
    return (
        <div className = "projects-grid">
            {
                projects.map((project) => (
                    <ProjectCard key={`project-card-${project.slug}`} project={project} />
                ))
            }
        </div>
    )
}