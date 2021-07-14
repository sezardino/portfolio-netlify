import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import Home from "../components/screens/home";

const HomePage = ({ data }) => {
	const { image, screenTitle, subtitle, title, seo } = data.markdownRemark.frontmatter;
	return (
		<Layout seo={seo}>
			<Home props={{ image, screenTitle, subtitle, title }} />
		</Layout>
	);
};

const query = graphql`
	{
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
				seo {
					description
					title
					image {
						childImageSharp {
							fluid(quality: 100, maxHeight: 200) {
								src
							}
						}
					}
				}
			}
		}
	}
`;

export { query };
export default HomePage;
