const header = {
	label: "Contact Screen",
	name: "contact",
	folder: "content/landing/",
	file: "content/landing/contact.md",
	fields: [
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

export default header;
