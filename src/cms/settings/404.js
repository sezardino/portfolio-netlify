const noPage = {
	label: "404",
	name: "no-page",
	folder: "content/settings/404",
	file: "content/settings/404/index.md",
	media_folder: "",
	public_folder: "",
	fields: [
		{
			label: "Title",
			name: "title",
			widget: "string",
			required: false,
		},
		{ label: "Info Text", name: "body", widget: "markdown", required: false },
	],
};

export default noPage;
