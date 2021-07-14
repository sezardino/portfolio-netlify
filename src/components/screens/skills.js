import React from "react";

const Skills = ({ props }) => {
	const { screenTitle, infoText, skillsList } = props;
	return (
		<section className="skills container">
			<h2 className="title title--main title--skills skills__title">
				{screenTitle.map((word) => {
					return (
						<span className="row" key={word}>
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
						<li className="skills__item" key={`${skill.name}${skill.level}`}>
							<p className="skills__item-name">{skill.name}</p>
							<div className="skills__tooltip">
								<p className="skills__item-info">{skill.description}</p>
							</div>
							<ul className="dots skills__dots">
								{Array.from({ length: 5 }).map((_, index) => (
									<li
										className={`dots__item ${index <= skill.level ? "dots__item--active" : ""}`}
										key={index}
									></li>
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
