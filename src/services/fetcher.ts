import { supabase } from "./supabase.ts";

export async function getProjects() {
    const { data, error } = await supabase
        .from("projects")
        .select(`
            id,
            slug,
            title,
            project_images (
                image_url,
                is_cover
            )
        `)
        .order("created_at", { ascending: false });

    if (error) {
        throw error;
    }

    return data.map((project) => {
        const cover = project.project_images.find(
            (image) => image.is_cover
        );

        const coverImage = cover
            ? supabase.storage
                .from("photos")
                .getPublicUrl(cover.image_url).data.publicUrl
            : "";

        return {
            id: project.id,
            slug: project.slug,
            title: project.title,
            coverImage: coverImage
        };
    });
}

export async function getProject(project_slug: string) {
    const { data, error } = await supabase
        .from("projects")
        .select(`
            id,
            slug,
            title,
            description,
            project_images (
                image_url,
                order
            )
        `)
        .eq("slug", project_slug)
        .order("order", {
            referencedTable: "project_images",
            ascending: true,
        })
        .single();

    if (error) {
        throw error;
    }

    return {
        ...data,
        project_images: data.project_images.map((image) => ({
            ...image,
            image_url: supabase.storage
                .from("photos")
                .getPublicUrl(image.image_url).data.publicUrl,
        })),
    };
}