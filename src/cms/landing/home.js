import title from "../parts/title";

const home = {
	label: "Home Screen",
	name: "home",
	folder: "content/landing/",
	file: "content/landing/home.md",
	media_folder: "",
	public_folder: "",
	fields: [
		{ label: "Title", name: "title", widget: "text", required: false },
		title,
		{ label: "Subtitle", name: "subtitle", widget: "text", required: false },
		{ label: "Image", name: "image", widget: "image", required: false },
	],
};

export default home;
