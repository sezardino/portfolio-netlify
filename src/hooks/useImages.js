import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/images/" }) {
			frontmatter {
				appleIcon {
					publicURL
				}
				fav16 {
					publicURL
				}
				fav32 {
					publicURL
				}
			}
		}
	}
`;

const useImages = () => {
	const images = useStaticQuery(query);
	return images.markdownRemark.frontmatter;
};

export default useImages;
