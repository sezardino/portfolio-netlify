import title from "../parts/title";
import seo from "../parts/seo";

const skills = {
	label: "Skills",
	name: "skills",
	folder: "content/pages/",
	file: "content/pages/skills.md",
	media_folder: "",
	public_folder: "",
	fields: [
		seo,
		title,
		{ label: "Info text", name: "infoText", widget: "string", required: false },
		{
			label: "Skills List",
			name: "skillsList",
			widget: "list",
			required: false,
			minimize_collapsed: true,
			fields: [
				{ label: "Name", name: "name", widget: "string", required: false },
				{ label: "Description", name: "description", widget: "text", required: false },
				{
					label: "Level",
					name: "level",
					widget: "select",
					required: false,
					options: ["0", "1", "2", "3", "4", "5"],
				},
			],
		},
	],
};

export default skills;
