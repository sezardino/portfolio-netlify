const menu = {
	label: "Menu",
	name: "menu",
	folder: "content/landing/",
	file: "content/landing/menu.md",
	fields: [
		{
			label: "Menu List",
			name: "menuList",
			widget: "list",
			required: false,
			fields: [
				{ label: "Label", name: "label", widget: "string", required: false },
				{ label: "slug", name: "slug", widget: "string", required: false },
			],
		},
	],
};

export default menu;
