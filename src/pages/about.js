import React from "react";
import { graphql } from "gatsby";
import About from "../components/screens/about";
import Layout from "../layouts";

const AboutPage = ({ data }) => {
	const {
		frontmatter: { screenTitle },
		html,
	} = data.markdownRemark;
	return (
		<Layout>
			<About props={{ screenTitle, html }} />
		</Layout>
	);
};

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
			frontmatter {
				screenTitle
			}
			html
		}
	}
`;

export { query };
export default AboutPage;
