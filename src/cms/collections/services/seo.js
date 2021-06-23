import defaultCollection from "../../parts/defaultCollection";

const seoData = {
    label: "Seo",
    name: "seo-data",
    folder: "content/services/seo",
    file: "content/services/seo/index.md",
    ...defaultCollection,
    fields: [
        { label: "Site name", name: "name", widget: "string" },
        {
            label: "Description",
            name: "description",
            widget: "text",
        },
        {
            label: "Keywords",
            name: "keywords",
            widget: "list",
            collapsed: false,
            required: false,
            field: {
                label: "Key",
                name: "key",
                widget: "string",
                required: false,
            },
        },
        {
            label: "Images",
            name: "images",
            widget: "object",
            collapsed: true,
            required: false,
            fields: [
                {
                    label: "Apple-couch-icon",
                    name: "apple-touch-icon",
                    widget: "image",
                },
                { label: "Favicon 32", name: "fav-32", widget: "image" },
                { label: "Favicon 16", name: "fav-16", widget: "image" },
                { label: "Mac os icon", name: "mask-icon", widget: "image" },
            ],
        },
    ],
};

export default seoData;
