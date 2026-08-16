import { useParams } from "react-router-dom";
import "./ProjectDetailsPage.css";

// Example photos
const photos = import.meta.glob("../assets/photos-various-sizes/*.{jpg,jpeg,png,webp,JPG}",
    {eager: true, query: "?url", import: "default",});

export function ProjectDetailsPage() {
    const photoHrefs = Object.values(photos);
    const { slug } = useParams();

    return (
        <>
            <div className="project-description">
                <h2>{slug}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis eros arcu, nec iaculis neque hendrerit id. Aliquam erat volutpat. Proin vestibulum scelerisque nibh sed molestie. Fusce luctus maximus luctus. Nam placerat consequat dignissim. Integer eget felis id lorem luctus ullamcorper. Integer eu luctus massa. Sed scelerisque libero et lorem elementum congue. Vestibulum ut magna sed magna dapibus condimentum in sed eros.</p>
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