import React, { useEffect, useRef } from "react";
import useGsap from "../../hooks/useGsap";

import PageTitle from "../../components/PageTitle";
import SkillsList from "../../components/SkillsPage/SkillsList/SkillsList";

const Skills = ({ props }) => {
	const { screenTitle, infoText, skillsList } = props;
	const tl = useGsap();
	const titleRef = useRef();
	const infoRef = useRef();
	const listRef = useRef();

	useEffect(() => {
		const title = titleRef.current;
		const info = infoRef.current;
		const list = listRef.current;

		tl.to([title, info, list], { opacity: 0 })
			.to([title, list], { opacity: 1 })
			.fromTo(title.children, { x: "+=100%", opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5, duration: 1.5 })
			.fromTo(
				[info, list.children],
				{ x: "-=100%", opacity: 0 },
				{ x: 0, opacity: 1, stagger: 0.4, duration: 1.5 }
			);
	}, []);

	return (
		<section className="skills container">
			<PageTitle classes="title--skills skills__title" title={screenTitle} ref={titleRef} />
			<div className="skills__wrapper">
				<p className="skills__info-text" style={{ opacity: 0 }} ref={infoRef}>
					{infoText}
				</p>
				<SkillsList classes={"skills__list skills__skills-list"} skills={skillsList} ref={listRef} />
			</div>
		</section>
	);
};

export default Skills;
