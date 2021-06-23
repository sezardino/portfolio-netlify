import CMS from "netlify-cms-app";
import posts from "./collections/posts";
import services from "./collections/services";
import pages from "./pages";

CMS.init({
    config: {
        load_config_file: false,
        backend: {
            name: "git-gateway",
            branch: "master",
            repo: "arechwa/personal-trainer-website",
        },
        commit_messages: {
            create: "Create {{collection}} “{{slug}}”",
            update: "Update {{collection}} “{{slug}}”",
            delete: "Delete {{collection}} “{{slug}}”",
            uploadMedia: "[skip ci] Upload “{{path}}”",
            deleteMedia: "[skip ci] Delete “{{path}}”",
        },
        publish_mode: "editorial_workflow",
        media_folder: "static/img",
        public_folder: "/img",
        collections: [services, pages, posts],
    },
});
