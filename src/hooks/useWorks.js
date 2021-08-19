import { graphql, useStaticQuery } from "gatsby";

const useWorks = (works) => {
	const {
		allMarkdownRemark: { edges: worksArr },
	} = useStaticQuery(query);
	const neededItems = works.map((work) => worksArr.find((item) => item.node.frontmatter.title === work));
	const transformedArr = neededItems.map((item) => {
		const {
			node: {
				fields: { slug },
				frontmatter: { mockup, title },
			},
		} = item;
		return { slug, name: title, mockup };
	});
	return transformedArr;
};

const query = graphql`
	query {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						mockup {
							childImageSharp {
								fluid(quality: 70) {
									src
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default useWorks;
