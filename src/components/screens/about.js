import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { stringSplit } from "../utils";

const About = ({ data }) => {
	const fields = data.markdownRemark.frontmatter;
	const props = {
		title: fields.sTitle,
		frstText: fields.frstText,
		scndText: fields.scndText,
	};
	return (
		<Layout title={fields.title}>
			<AboutTemplate data={props} />
		</Layout>
	);
};

const AboutTemplate = ({ data }) => {
	const splitTitle = stringSplit(data.title);
	return (
		<section className="about container">
			<h2 className="title title--main title--about about__title">
				{splitTitle.map((word, index) => {
					return (
						<span className={`row  animate__animated animate__rollIn animate__delay-${index}`} key={index}>
							{word.map((letter) => (
								<span className="title__letter title__letter--scale" key={`${letter}-${index}`}>
									{letter}
								</span>
							))}
						</span>
					);
				})}
			</h2>
			<div className="about__wrapper">
				<p className="text text--about about__text animate__animated animate__rollIn animate__delay-2">
					{data.frstText}
				</p>
				<br />
				<p className="text text--about about__text animate__animated animate__rollIn animate__delay-2">
					{data.scndText}
				</p>
			</div>
		</section>
	);
};

export default About;
