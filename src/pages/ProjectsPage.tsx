import "./ProjectsPage.css";

// Example photos
const photos = import.meta.glob("../assets/photos/*.{jpg,jpeg,png,webp,JPG}",
    {eager: true, query: "?url", import: "default",});

export function ProjectsPage() {
    const photoHrefs = Object.values(photos);

    return (
        <div className = "projects-grid">
            {
                photoHrefs.map((photoHref) => (
                    <div className = "project-card">
                        <img key={photoHref} src={photoHref} alt=""/>
                        <p>Project Name</p>
                    </div>
                ))
            }
        </div>
    )
}