import { graphql, useStaticQuery } from "gatsby";
import { useEffect } from "react";

const query = graphql`
	query MyQuery {
		markdownRemark(fileAbsolutePath: { regex: "/site/" }) {
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
