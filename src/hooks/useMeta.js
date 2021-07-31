import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
	query MyQuery {
		markdownRemark(fileAbsolutePath: { regex: "/settings/site/" }) {
			frontmatter {
				siteName
				siteDesc
				keywords
			}
		}
	}
`;

const useImages = () => {
	const meta = useStaticQuery(query);
	return meta.markdownRemark.frontmatter;
};

export default useImages;
