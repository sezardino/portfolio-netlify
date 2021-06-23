import React from "react";
import { graphql } from "gatsby";
// import { stringSplit } from "../utils";

const Skills = () => {
	// const splitTitle = stringSplit(data.title);
	return (
		<p>skills</p>
		// <section className="skills container">
		// 	<h2 className="title title--main title--skills skills__title">
		// 		{splitTitle.map((word, index) => {
		// 			return (
		// 				<span
		// 					className={`row  animate__animated animate__fadeInRight animate__delay-${index}`}
		// 					key={index}
		// 				>
		// 					{word.map((letter, index) => (
		// 						<span className="title__letter title__letter--scale" key={`${letter}-${index}`}>
		// 							{letter}
		// 						</span>
		// 					))}
		// 				</span>
		// 			);
		// 		})}
		// 	</h2>
		// 	<ul className="skills-list skills__skills-list">
		// 		{data.skills.map((item) => (
		// 			<li
		// 				className="skills-list__item  animate__animated animate__fadeInLeft"
		// 				key={`${item.name}${item.level}`}
		// 			>
		// 				<p className="skills-list__skill">{item.name}</p>
		// 				<ul className="dots skills-list__dots  animate__animated animate__fadeInLeft animate__delay-2">
		// 					{Array.from({ length: 5 }).map((_, index) => (
		// 						<li
		// 							className={`dots__item ${index <= item.level ? "dots__item--active" : ""}`}
		// 							key={index}
		// 						>
		// 							<p className="hidden">{item.description}</p>
		// 						</li>
		// 					))}
		// 				</ul>
		// 			</li>
		// 		))}
		// 	</ul>
		// </section>
	);
};

export default Skills;
