import seo from "../parts/seo";

const collection = {
    name: "blog",
    label: "Articles",
    editor: {
        preview: false,
    },
    description: "Articles content",
    folder: "content/pages/blog",
    create: true,
    slug: "index",
    media_folder: "",
    public_folder: "",
    path: "{{title}}/index",
    fields: [
        seo,
        {
            label: "Template Key",
            name: "templateKey",
            widget: "hidden",
            default: "blog-post",
        },
        {
            label: "Title",
            name: "title",
            widget: "string",
            default: "",
        },
        {
            label: "Featured Image",
            name: "thumbnail",
            widget: "image",
            default: "",
            required: false,
        },
        {
            label: "Date",
            name: "date",
            widget: "datetime",
            default: "",
            required: false,
        },
        {
            label: "Excerpt",
            name: "excerpt",
            widget: "text",
            default: "",
            required: false,
        },
        {
            label: "Body",
            name: "body",
            widget: "markdown",
            default: "",
            required: false,
        },
    ],
};

export default collection;
