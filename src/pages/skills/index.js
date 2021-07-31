import React from "react";
import { graphql } from "gatsby";

import Layout from "@/layouts";
import Skills from "@/containers/SkillsPage";

const SkillsPage = ({ data }) => {
	const { screenTitle, infoText, skillsList, seo } = data.markdownRemark.frontmatter;
	return (
		<Layout seo={seo}>
			<Skills props={{ screenTitle, infoText, skillsList }} />
		</Layout>
	);
};

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/skills.md/" }) {
			frontmatter {
				screenTitle
				infoText
				skillsList {
					description
					level
					name
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
export default SkillsPage;
