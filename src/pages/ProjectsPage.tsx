import "./ProjectsPage.css";
import { ProjectCard } from "../components/ProjectCard.tsx";
import { getProjects } from "../services/fetcher.ts";
import { useEffect, useState } from "react";

type Project = Awaited<ReturnType<typeof getProjects>>[number];

export function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadProjects() {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch {
                setError("Failed to load projects.");
            } finally {
                setLoading(false);
            }
        }

        loadProjects();
    }, []);

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>{error}</p>;

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