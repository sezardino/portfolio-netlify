import React from "react";
import { graphql } from "gatsby";
import Skills from "../components/screens/skills";
import Layout from "../layouts";

const SkillsPage = ({ data }) => {
	const { screenTitle, infoText, skillsList } = data.markdownRemark.frontmatter;
	return (
		<Layout>
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
			}
		}
	}
`;

export { query };
export default SkillsPage;
