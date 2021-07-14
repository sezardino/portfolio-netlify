import title from "../parts/title";
import seo from "../parts/seo";

const home = {
	label: "Home",
	name: "home",
	folder: "content/pages/",
	file: "content/pages/home.md",
	media_folder: "",
	public_folder: "",
	fields: [
		seo,
		{ label: "Title", name: "title", widget: "text", required: false },
		title,
		{ label: "Subtitle", name: "subtitle", widget: "text", required: false },
		{ label: "Image", name: "image", widget: "image", required: false },
	],
};

export default home;
