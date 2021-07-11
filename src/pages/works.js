import { graphql } from "gatsby";
import React from "react";
import Works from "../components/screens/works";
import Layout from "../layouts";

const WorksPage = ({ data }) => {
	const props = data.markdownRemark.frontmatter;
	return (
		<Layout>
			<Works props={props} />
		</Layout>
	);
};

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/works.md/" }) {
			frontmatter {
				screenTitle
				infoText
			}
		}
	}
`;

export { query };
export default WorksPage;
