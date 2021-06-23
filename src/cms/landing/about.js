import title from "../parts/title";

const about = {
	label: "About Screen",
	name: "about",
	folder: "content/landing/",
	file: "content/landing/about.md",
	fields: [title, { label: "Screen text", name: "body", widget: "markdown" }],
};

export default about;
