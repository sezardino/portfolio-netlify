import title from "../parts/title";

const about = {
	label: "About Screen",
	name: "about",
	folder: "content/landing/",
	file: "content/landing/about.md",
	media_folder: "",
	public_folder: "",
	fields: [title, { label: "Screen text", name: "body", widget: "markdown" }],
};

export default about;
