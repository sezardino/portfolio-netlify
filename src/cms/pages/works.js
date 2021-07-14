import title from "../parts/title";
import seo from "../parts/seo";

const works = {
	label: "Works",
	name: "works",
	folder: "content/pages/",
	file: "content/pages/works.md",
	media_folder: "",
	public_folder: "",
	fields: [seo, title, { label: "Info text", name: "body", widget: "markdown" }],
};

export default works;
