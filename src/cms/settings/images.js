const images = {
	label: "Images",
	name: "images",
	folder: "content/settings/images",
	file: "content/settings/images/index.md",
	fields: [
		{
			label: "Logo",
			name: "logo",
			widget: "object",
			required: false,
			fields: [
				{ label: "Logo", name: "logo", widget: "image", required: false },
				{ label: "Logo Alr", name: "logoAlt", widget: "string", required: false },
			],
		},
		{ label: "Apple icon", name: "appleIcon", widget: "image", required: false },
		{ label: "Favicon 32", name: "fav32", widget: "image", required: false },
		{ label: "Favicon 16", name: "fav16", widget: "image", required: false },
		{ label: "Mac OS icon", name: "mac", widget: "image", required: false },
	],
};

export default images;
