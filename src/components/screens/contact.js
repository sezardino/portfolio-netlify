import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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

const deleteSpace = (string) => string.replaceAll(" ", "");

const Contact = () => {
	const data = useStaticQuery(query);
	const { title, socialMedia, contactInfo } = data.markdownRemark.frontmatter;
	return (
		<section className="contact container">
			<div className="contact__wrapper">
				<h2 className="title title--contact title--main contact__title">{title}</h2>
				<ul className="info contact__info">
					{contactInfo.map((item) => (
						<li className="info__item" key={item.name}>
							<span className="info__def">{item.label}:</span>
							<span className="info__data">{item.content}</span>
							<a
								href={`${item.name === "Telephone" ? "tel" : "mailto"}:${item.content}`}
								className="info__data info__link"
							>
								{item.content}
							</a>
						</li>
					))}
				</ul>
			</div>
			<ul className="social contact__social">
				{socialMedia.map((item) => {
					return (
						<li className="social__item" key={item.name}>
							<a href={item.link} target="blank" className="social__link" title={item.name}>
								{item.label}
							</a>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Contact;
