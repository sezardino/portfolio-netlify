const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const worksListQuery = `
query {
	markdownRemark(fileAbsolutePath: {regex: "/works.md/"}) {
	  frontmatter {
		projects
	  }
	}
  }`;

const worksQuery = `
  query {
	allMarkdownRemark {
		nodes {
		fields {
		  slug
		}
		frontmatter {
			title
		}
	  }
	}
  }
  `;

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;

	const worksList = await graphql(worksListQuery);
	const works = await graphql(worksQuery);

	const items = works.data.allMarkdownRemark.nodes;

	const pagesList = worksList.data.markdownRemark.frontmatter.projects.map((item) =>
		items.find((project) => project.frontmatter.title === item)
	);

	pagesList.forEach((page) => {
		createPage({
			path: page.fields.slug,
			component: path.resolve(`src/templates/project.js`),
			context: { slug: page.fields.slug },
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark` && node.fileAbsolutePath.includes("/projects/")) {
		let value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value: value.replace("/projects/", "/works/"),
		});
	}
};

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
				"@cms": path.resolve(__dirname, "src/cms"),
			},
		},
	});
};
