import title from "../parts/title";

const skills = {
	label: "Skills Screen",
	name: "skills",
	folder: "content/landing/",
	file: "content/landing/skills.md",
	fields: [
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
