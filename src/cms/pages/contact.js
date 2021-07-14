import seo from "../parts/seo";

const contact = {
	label: "Contact Screen",
	name: "contact",
	folder: "content/pages/",
	file: "content/pages/contact.md",
	media_folder: "",
	public_folder: "",
	fields: [
		seo,
		{ label: "Title", name: "title", widget: "string", required: false },
		{
			label: "Contact Info",
			name: "contactInfo",
			widget: "list",
			required: false,
			minimize_collapsed: true,
			fields: [
				{ label: "Name", name: "name", widget: "string", required: false },
				{ label: "Label", name: "label", widget: "string", required: false },
				{ label: "Content", name: "content", widget: "string", required: false },
			],
		},
		{
			label: "Social Media",
			name: "socialMedia",
			widget: "list",
			required: false,
			minimize_collapsed: true,
			fields: [
				{ label: "Name", name: "name", widget: "string", required: false },
				{ label: "Label", name: "label", widget: "string", required: false },
				{ label: "Link", name: "link", widget: "string", required: false },
			],
		},
	],
};

export default contact;
