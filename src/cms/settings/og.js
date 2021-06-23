const og = {
	label: "Open Graph",
	name: "og",
	folder: "content/settings/og",
	file: "content/settings/og/index.md",
	media_folder: "",
	public_folder: "",
	fields: [
		{ label: "Title", name: "title", widget: "string", required: false },
		{ label: "Description", name: "desc", widget: "text", required: false },
		{ label: "Image", name: "image", widget: "image", required: false },
	],
};

export default og;
