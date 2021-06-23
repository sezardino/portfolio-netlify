const partial = {
    label: "SEO Settings",
    name: "seo",
    widget: "object",
    collapsed: true,
    fields: [
        {
            label: "Title",
            name: "title",
            widget: "string",
            required: true,
        },
        {
            label: "Meta Description",
            name: "description",
            widget: "text",
            required: true,
        },
        {
            label: "Image",
            name: "image",
            widget: "image",
            required: true,
        },
    ],
};

export default partial;
