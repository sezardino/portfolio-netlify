import title from "../parts/title";
import seo from "../parts/seo";

const about = {
	label: "About",
	name: "about",
	folder: "content/pages/about",
	file: "content/pages/about.md",
	media_folder: "",
	public_folder: "",
	fields: [seo, title, { label: "Screen text", name: "body", widget: "markdown" }],
};

export default about;
