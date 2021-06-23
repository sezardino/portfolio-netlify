import title from "../parts/title";

const works = {
	label: "Works Screen",
	name: "works",
	folder: "content/landing/",
	file: "content/landing/works.md",
	fields: [title, { label: "Info text", name: "body", widget: "markdown" }],
};

export default works;
