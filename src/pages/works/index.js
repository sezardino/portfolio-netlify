import React from "react";
import { graphql } from "gatsby";

import Layout from "@/layouts";
import Works from "@/containers/WorksPage";

import { transformWorksData } from "@/utils";

const WorksPage = ({ data }) => {
	const { allMarkdownRemark: worksData, markdownRemark: pageData } = data;
	const pageProps = { html: pageData.html, ...pageData.frontmatter };
	const works = transformWorksData(worksData.edges);

	return (
		<Layout seo={pageProps.seo}>
			<Works props={pageProps} works={works} />
		</Layout>
	);
};

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/works.md/" }) {
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
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
			edges {
				node {
					html
					frontmatter {
						title
						mockup {
							childImageSharp {
								fluid(quality: 100) {
									src
								}
							}
						}
						projectImages {
							desktopImage {
								childImageSharp {
									fluid(quality: 100) {
										src
									}
								}
							}
							mobileImage {
								childImageSharp {
									fluid(quality: 100) {
										src
									}
								}
							}
						}
						projectLinks {
							repository
							view
						}
						technologies {
							technology
						}
					}
				}
			}
		}
	}
`;

export { query };
export default WorksPage;
