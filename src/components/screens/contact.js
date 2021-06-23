import React from "react";
import { graphql } from "gatsby";

const Contact = () => {
	return (
		<p>contact</p>
		// <section className="contact container">
		// 	<div className="contact__wrapper">
		// 		<h2 className="title title--contact title--main contact__title animate__animated animate__jackInTheBox">
		// 			{data.title}
		// 		</h2>
		// 		<ul className="info contact__info">
		// 			<li className="info__item animate__delay-16 animate__animated animate__zoomIn">
		// 				<span className="info__def">tel:</span>
		// 				<span className="info__data">{contactData.tel}</span>
		// 			</li>
		// 			<li className="info__item animate__delay-17 animate__animated animate__zoomIn">
		// 				<span className="info__def">e-mail:</span>
		// 				<span className="info__data">{contactData.mail}</span>
		// 			</li>
		// 		</ul>
		// 	</div>
		// 	<ul className="social contact__social">
		// 		{contactData.social.map((item) => {
		// 			return (
		// 				<li
		// 					className="social__item animate__delay-13 animate__animated animate__zoomIn"
		// 					key={item.name}
		// 				>
		// 					<a href={item.link} target="blank" className="social__link" title={item.name}>
		// 						{item.label}
		// 					</a>
		// 				</li>
		// 			);
		// 		})}
		// 	</ul>
		// </section>
	);
};

export default Contact;
