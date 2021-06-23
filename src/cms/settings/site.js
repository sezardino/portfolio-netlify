const site = {
	label: "Site Metadata",
	name: "siteMeta",
	folder: "content/settings/site",
	file: "content/settings/site/index.md",
	media_folder: "",
	public_folder: "",
	fields: [
		{ label: "Site name", name: "siteName", widget: "string", required: false },
		{ label: "Site description", name: "siteDesc", widget: "text", required: false },
		{
			label: "Site keywords",
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
	],
};

export default site;
