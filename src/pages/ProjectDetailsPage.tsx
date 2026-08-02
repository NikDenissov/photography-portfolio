import { useParams } from "react-router-dom";

export function ProjectDetailsPage() {
    const { slug } = useParams();

    return (
        <>
            <h1>Project page</h1>
            <p>Contains details about the selected project: {slug}</p>
        </>
    )
}