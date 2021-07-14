import { graphql } from "gatsby";
import React from "react";
import Contact from "../components/screens/contact";
import Layout from "../layouts";

const ContactPage = ({ data }) => {
	const { title, socialMedia, contactInfo } = data.markdownRemark.frontmatter;
	return (
		<Layout>
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
			}
		}
	}
`;

export { query };
export default ContactPage;
