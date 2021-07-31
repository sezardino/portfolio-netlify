import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
		<AniLink to="/" cover bg="#1d1d1d" className="logo">
			<img src={logo.image.publicURL} alt={logo.alt} />
		</AniLink>
	);
};

export default Logo;
