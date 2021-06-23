import defaultCollection from "../../parts/defaultCollection";

const commonData = {
    label: "Common",
    name: "commonData",
    folder: "content/services/common",
    file: "content/services/common/index.md",
    ...defaultCollection,
    fields: [
        { label: "Logotype", name: "logo", widget: "image", required: false },
        {
            label: "Contact Data",
            name: "contactData",
            widget: "object",
            required: false,
            fields: [
                {
                    label: "Phone number",
                    name: "tel",
                    widget: "string",
                    required: false,
                },
                {
                    label: "Email",
                    name: "mail",
                    widget: "string",
                    required: false,
                },
                {
                    label: "Facebook",
                    name: "facebook",
                    widget: "string",
                    required: false,
                },
                {
                    label: "Instagram",
                    name: "instagram",
                    widget: "string",
                    required: false,
                },
                { label: "VK", name: "vk", widget: "string", required: false },
                {
                    label: "WhatsApp",
                    name: "whatsapp",
                    widget: "string",
                    required: false,
                },
            ],
        },
    ],
};

export default commonData;
