// Mock data
const photos = import.meta.glob("../assets/photos/*.{jpg,jpeg,png,webp,JPG}",
    {eager: true, query: "?url", import: "default",});
const photoHrefs = Object.values(photos);

export const projects = [
    {
        slug: "countryside-home",
        title: "Countryside Home",
        description: "A warm country home surrounded by rolling fields and mature gardens.",
        coverImage: photoHrefs[0]
    },
    {
        slug: "urban-flat",
        title: "Urban Flat",
        description: "A bright city apartment blending clean lines with warm natural textures.",
        coverImage: photoHrefs[1]
    },
    {
        slug: "modern-interior",
        title: "Modern Interior",
        description: "A refined interior combining contemporary design with timeless details.",
        coverImage: photoHrefs[2]
    },
    {
        slug: "estate",
        title: "The Estate",
        description: "An elegant country estate with expansive grounds and classic architecture.",
        coverImage: photoHrefs[3]
    },
    {
        slug: "modern-house",
        title: "Modern House",
        description: "A striking modern home defined by clean geometry, light and open spaces.",
        coverImage: photoHrefs[4]
    }
];