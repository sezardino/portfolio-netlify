import CMS from "netlify-cms-app";
import settings from "./settings";
import pages from "./pages";
import project from "./collections/project";

CMS.init({
	config: {
		load_config_file: false,
		backend: {
			name: "github",
			branch: "master",
			repo: "sezardino/portfolio-netlify",
		},
		commit_messages: {
			create: "Create {{collection}} “{{slug}}”",
			update: "Update {{collection}} “{{slug}}”",
			delete: "Delete {{collection}} “{{slug}}”",
			uploadMedia: "[skip ci] Upload “{{path}}”",
			deleteMedia: "[skip ci] Delete “{{path}}”",
		},
		// publish_mode: "editorial_workflow",
		media_folder: "static/img",
		public_folder: "/img",
		collections: [settings, pages, project],
	},
});
