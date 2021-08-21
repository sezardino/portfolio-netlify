import React from "react";
import { graphql } from "gatsby";

import Layout from "../../layouts";
import Works from "../../containers/WorksPage";

import useWorks from "../../hooks/useWorks";

const WorksPage = ({ data, location }) => {
	const { markdownRemark: pageData } = data;
	const pageProps = { html: pageData.html, ...pageData.frontmatter };
	const works = useWorks(pageProps.projects);

	return (
		<Layout seo={pageProps.seo}>
			<Works props={pageProps} works={works} location={location} />
		</Layout>
	);
};

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/works.md/" }) {
			html
			frontmatter {
				screenTitle
				projects
				seo {
					description
					title
					image {
						childImageSharp {
							fluid(quality: 70, maxHeight: 200) {
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
export default WorksPage;
