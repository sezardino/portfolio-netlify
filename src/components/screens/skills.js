import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import { stringSplit } from "../utils";

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/skills.md/" }) {
			frontmatter {
				screenTitle
				infoText
				skillsList {
					description
					level
					name
				}
			}
		}
	}
`;

const Skills = () => {
	const data = useStaticQuery(query);
	const { screenTitle, infoText, skillsList } = data.markdownRemark.frontmatter;
	return (
		<section className="screen skills container">
			<h2 className="title title--main title--skills skills__title">
				{screenTitle.map((word, index) => {
					return (
						<span
							className={`row  animate__animated animate__fadeInRight animate__delay-${index}`}
							key={word}
						>
							{word.split("").map((letter, index) => (
								<span className="title__letter title__letter--scale" key={`${letter}-${index}`}>
									{letter}
								</span>
							))}
						</span>
					);
				})}
			</h2>
			<div className="skills__wrapper">
				<p className="skills__info-text">{infoText}</p>
				<ul className="skills__list skills__skills-list">
					{skillsList.map((skill) => (
						<li
							className="skills__item  animate__animated animate__fadeInLeft"
							key={`${skill.name}${skill.level}`}
						>
							<p className="skills__item-name">{skill.name}</p>
							<ul className="dots skills__dots  animate__animated animate__fadeInLeft animate__delay-2">
								{Array.from({ length: 5 }).map((_, index) => (
									<li
										className={`dots__item ${index <= skill.level ? "dots__item--active" : ""}`}
										key={index}
									>
										<p className="hidden">{skill.description}</p>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Skills;
