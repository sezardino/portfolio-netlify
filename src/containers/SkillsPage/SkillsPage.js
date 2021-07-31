import React from "react";

import PageTitle from "@/components/PageTitle";
import SkillsList from "@/components/SkillsPage/SkillsList/SkillsList";

const Skills = ({ props }) => {
	const { screenTitle, infoText, skillsList } = props;
	return (
		<section className="skills container">
			<PageTitle classes="title--skills skills__title" title={screenTitle} />
			<div className="skills__wrapper">
				<p className="skills__info-text">{infoText}</p>
				<SkillsList classes={"skills__list skills__skills-list"} skills={skillsList} />
			</div>
		</section>
	);
};

export default Skills;
