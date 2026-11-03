import { useParams } from "react-router-dom";
import "./ProjectDetailsPage.css";
import {getProject} from "../services/fetcher.ts";
import { useEffect, useState } from "react";

type Project = Awaited<ReturnType<typeof getProject>>;

export function ProjectDetailsPage() {
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { slug } = useParams();

    useEffect(() => {
        async function loadProject() {
            if (!slug) {
                setError("Project not found.");
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const data = await getProject(slug);
                setProject(data);
            } catch {
                setError("Failed to load project.");
            } finally {
                setLoading(false);
            }
        }

        loadProject();
    }, [slug]);

    if (loading) return <p>Loading project...</p>;
    if (error) return <p>{error}</p>;
    if (!project) return <p>Project not found.</p>;

    return (
        <>
            <div className="project-description">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
            <div className = "project-photos-container">
                {
                    project.project_images.map((photo) => (
                    <img
                        key={photo.image_url}
                        src={photo.image_url}
                        alt={project.title}
                    />))
                }
            </div>
        </>
    )
}