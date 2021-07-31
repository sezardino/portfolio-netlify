import React from "react";
import { graphql } from "gatsby";

import Layout from "@/layouts";
import About from "@/containers/AboutPage";


const AboutPage = ({ data }) => {
	const {
		frontmatter: { screenTitle, seo },
		html,
	} = data.markdownRemark;
	return (
		<Layout seo={seo}>
			<About props={{ screenTitle, html }} />
		</Layout>
	);
};

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
			html
			frontmatter {
				screenTitle
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
export default AboutPage;
