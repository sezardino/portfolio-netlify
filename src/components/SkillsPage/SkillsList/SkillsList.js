import React from "react";

const SkillsList = ({ skills, classes }) => {
	return (
		<ul className={classes}>
			{skills.map((skill) => (
				<li className="skills__item" key={`${skill.name}${skill.level}`}>
					<p className="skills__item-name">{skill.name}</p>
					<div className="skills__tooltip">
						<p className="skills__item-info">{skill.description}</p>
					</div>
					<ul className="dots skills__dots">
						{Array.from({ length: 5 }).map((_, index) => (
							<li
								className={`dots__item ${index < skill.level ? "dots__item--active" : ""}`}
								key={index}
							></li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
};

export default SkillsList;
