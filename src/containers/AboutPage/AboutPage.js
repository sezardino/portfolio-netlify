import React from "react";
import PageTitle from"../../components/PageTitle";

const About = ({ props }) => {
	const { html, screenTitle } = props;
	return (
		<section className="about container">
			<PageTitle title={screenTitle} classes="title--about about__title" />
			<div className="about__wrapper text--about" dangerouslySetInnerHTML={{ __html: html }}></div>
		</section>
	);
};

export default About;
