import noPage from "./404";
import images from "./images";
import site from "./site";
import og from "./og";

const pages = {
	label: "Settings",
	name: "settings",
	editor: {
		preview: false,
	},
	files: [site, og, images, noPage],
};

export default pages;
