import { useParams } from "react-router-dom";

export function ProjectDetailsPage() {
    const { slug } = useParams();

    return (
        <>
            <h2>Project page</h2>
            <p>Contains details about the selected project: {slug}</p>
        </>
    )
}