import { useParams } from "react-router-dom";
import "./ProjectDetailsPage.css";
import { projects } from "../mock-data/projectsData.ts";

// Example photos
const photos = import.meta.glob("../assets/photos-various-sizes/*.{jpg,jpeg,png,webp,JPG}",
    {eager: true, query: "?url", import: "default",});

export function ProjectDetailsPage() {
    const photoHrefs = Object.values(photos);
    const { slug } = useParams();

    const project = projects.find(p => p.slug === slug);
    const isProjectDefined = typeof(project) != "undefined";

    return (
        <>
            <div className="project-description">
                <h2>{ isProjectDefined ? project.title : slug }</h2>
                <p>{ isProjectDefined ? project.description : "" }</p>
            </div>
            <div className = "project-photos-container">
                {
                    photoHrefs.map((photoHref) => (
                        <img key={photoHref} src={photoHref} alt=""/>
                    ))
                }
            </div>
        </>
    )
}