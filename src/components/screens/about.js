import React from "react";

const About = ({ props }) => {
	const { html, screenTitle } = props;
	return (
		<section className="about container">
			<h2 className="title title--main title--about about__title">
				{screenTitle.map((word) => (
					<span className={`row`} key={word}>
						{word.split("").map((letter, index) => (
							<span className="title__letter title__letter--scale" key={`${letter}-${index}`}>
								{letter}
							</span>
						))}
					</span>
				))}
			</h2>
			<div className="about__wrapper text--about" dangerouslySetInnerHTML={{ __html: html }}></div>
		</section>
	);
};

export default About;
