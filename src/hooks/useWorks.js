import { graphql, useStaticQuery } from "gatsby";
import { transformWorksData } from "../utils";

const useWorks = (works) => {
	const data = useStaticQuery(query);
	const transformedData = transformWorksData(data.allMarkdownRemark.edges);

	return works.map((item) => transformedData.find((work) => work.name === item));
};

const query = graphql`
	query {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
			edges {
				node {
					html
					frontmatter {
						title
						mockup {
							childImageSharp {
								fluid(quality: 70) {
									src
								}
							}
						}
						projectImages {
							desktopImage {
								childImageSharp {
									fluid(quality: 70) {
										src
									}
								}
							}
							mobileImage {
								childImageSharp {
									fluid(quality: 70) {
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

export default useWorks;

// mobileImage {
// 	childImageSharp {
// 		fluid(quality: 70) {
// 			src
// 		}
// 	}
// }
