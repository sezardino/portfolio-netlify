import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import Home from "../components/screens/home";

const HomePage = ({ data }) => {
	const { image, screenTitle, subtitle, title } = data.markdownRemark.frontmatter;
	return (
		<Layout>
			<Home props={{ image, screenTitle, subtitle, title }} />
		</Layout>
	);
};

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
			frontmatter {
				title
				screenTitle
				subtitle
				image {
					childImageSharp {
						fluid(quality: 100) {
							src
						}
					}
				}
			}
		}
	}
`;

export { query };
export default HomePage;
