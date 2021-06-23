import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const query = graphql`
	query MyQuery {
		markdownRemark(fileAbsolutePath: { regex: "/images/" }) {
			frontmatter {
				logo {
					image {
						publicURL
					}
				}
			}
		}
	}
`;

const Logo = () => {
	const {
		markdownRemark: {
			frontmatter: {
				logo: {
					image: { publicURL },
				},
			},
		},
	} = useStaticQuery(query);

	return (
		<Link to="/" className="logo">
			<ImageComponent data={imageData} />
		</Link>
	);
};

export default Logo;
