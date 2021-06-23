import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/images/" }) {
			frontmatter {
				logo {
					alt
					image {
						publicURL
					}
				}
			}
		}
	}
`;

const Logo = () => {
	const data = useStaticQuery(query);
	const logo = data.markdownRemark.frontmatter.logo;

	return (
		<Link to="/" className="logo">
			<img src={logo.image.publicURL} alt={logo.alt} />
		</Link>
	);
};

export default Logo;
