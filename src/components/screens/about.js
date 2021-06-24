import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
			frontmatter {
				screenTitle
			}
			html
		}
	}
`;

const About = () => {
	const data = useStaticQuery(query);
	const {
		frontmatter: { screenTitle },
		html,
	} = data.markdownRemark;
	return (
		<section className="about container">
			<h2 className="title title--main title--about about__title">
				{screenTitle.map((word, index) => (
					<span className={`row  animate__animated animate__rollIn animate__delay-${index}`} key={word}>
						{word.split("").map((letter, index) => (
							<span className="title__letter title__letter--scale" key={`${letter}-${index}`}>
								{letter}
							</span>
						))}
					</span>
				))}
			</h2>
			<div
				className="about__wrapper text--about animate__animated animate__rollIn animate__delay-2"
				dangerouslySetInnerHTML={{ __html: html }}
			></div>
		</section>
	);
};

export default About;
