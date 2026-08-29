import "./ProjectsPage.css";
import { ProjectCard } from "../components/ProjectCard.tsx";

// Mock data
const photos = import.meta.glob("../assets/photos/*.{jpg,jpeg,png,webp,JPG}",
    {eager: true, query: "?url", import: "default",});
const photoHrefs = Object.values(photos);

const projects = [
    {
        slug: "countryside-home",
        title: "Countryside Home",
        coverImage: photoHrefs[0]
    },
    {
        slug: "urban-flat",
        title: "Urban Flat",
        coverImage: photoHrefs[1]
    },
    {
        slug: "modern-interior",
        title: "Modern Interior",
        coverImage: photoHrefs[2]
    },
    {
        slug: "estate",
        title: "The Estate",
        coverImage: photoHrefs[3]
    },
    {
        slug: "modern-house",
        title: "Modern House",
        coverImage: photoHrefs[4]
    }
];

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