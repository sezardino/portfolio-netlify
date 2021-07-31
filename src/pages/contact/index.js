import React from "react";
import { graphql } from "gatsby";

import Layout from "../../layouts";
import Contact from "../../containers/ContactPage";


const ContactPage = ({ data }) => {
	const { title, socialMedia, contactInfo, seo } = data.markdownRemark.frontmatter;
	return (
		<Layout seo={seo}>
			<Contact props={{ title, socialMedia, contactInfo }} />
		</Layout>
	);
};

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/contact.md/" }) {
			frontmatter {
				title
				socialMedia {
					label
					link
					name
				}
				contactInfo {
					content
					label
					name
				}
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
	}
`;

export { query };
export default ContactPage;
