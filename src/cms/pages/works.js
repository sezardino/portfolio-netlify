import title from "../parts/title";
import seo from "../parts/seo";

const works = {
	label: "Works",
	name: "works",
	folder: "content/pages/",
	file: "content/pages/works.md",
	media_folder: "",
	public_folder: "",
	fields: [
		seo,
		title,
		{ label: "Info text", name: "body", widget: "markdown" },
		{
			label: "Projects",
			name: "projects",
			widget: "list",
			field: {
				label: "Projects",
				name: "projects",
				widget: "relation",
				collection: "projects",
				search_fields: ["title"],
				value_field: "title",
				display_fields: ["title", "mockup"],
			},
		},
		// {
		// 	label: "Projects",
		// 	name: "projects",
		// 	widget: "relation",
		// 	collection: "projects",
		// 	search_fields: ["title"],
		// 	value_field: "title",
		// 	display_fields: ["title"],
		// },
	],
};

export default works;
