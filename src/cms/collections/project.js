const project = {
	label: "Projects",
	name: "projects",
	editor: {
		preview: false,
	},
	description: "Projects list",
	folder: "content/projects/",
	create: true,
	media_folder: "",
	public_folder: "",
	slug: "{{title}}",
	path: "{{title}}/index",
	fields: [
		{
			label: "Project name",
			name: "title",
			widget: "string",
			required: false,
		},
		{ label: "Mockup", name: "mockup", widget: "image", required: false },
		{ label: "Show", name: "show", widget: "select", options: ["true", "false"] },
		{ label: "Order", name: "order", widget: "number" },
		{
			label: "Project Images",
			name: "projectImages",
			widget: "object",
			required: false,
			fields: [
				{ label: "Desktop Image", name: "desktopImage", widget: "image", required: false },
				{ label: "Mobile Image", name: "mobileImage", widget: "image", required: false },
			],
		},
		{
			label: "Project Links",
			name: "projectLinks",
			widget: "object",
			required: false,
			fields: [
				{ label: "Repository", name: "repository", widget: "string", required: false },
				{ label: "View", name: "view", widget: "string", required: false },
			],
		},
		{
			label: "Technologies",
			name: "technologies",
			widget: "list",
			required: false,
			minimize_collapsed: true,
			fields: [{ label: "Technology", name: "technology", widget: "string", required: false }],
		},
		{ label: "Project description", name: "body", widget: "markdown", required: false },
	],
};

export default project;
