import button from "../button";

const about = {
    label: "Default Section",
    name: "about",
    widget: "object",
    collapsed: true,
    fields: [
        {
            label: "Title",
            name: "title",
            widget: "string",
            required: false,
        },
        { label: "Description", name: "description", widget: "text" },
        button,
        {
            label: "Image",
            name: "image",
            widget: "image",
            required: false,
        },
    ],
};

export default about;
