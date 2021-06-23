import menu from "./menu";
import home from "./home";
import about from "./about";
import skills from "./skills";
import works from "./works";
import contact from "./contact";

const pages = {
	name: "landing",
	label: "Landing",
	editor: {
		preview: false,
	},
	files: [menu, home, about, skills, works, contact],
};

export default pages;
