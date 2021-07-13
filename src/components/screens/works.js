import React from "react";
import { Link } from "gatsby";

const Works = ({ props, works, worksHandler }) => {
	const { infoText, screenTitle } = props;
	return (
		<section className="portfolio container">
			<h2 className="title title--main title--portfolio portfolio__title">
				{screenTitle.map((word, index) => {
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
			<div className="portfolio__wrapper ">
				<p className="portfolio__info-text">{infoText}</p>
				<ul className="portfolio__list">
					{works.map(({ name, mockup }) => {
						return (
							<li className="portfolio__item" key={name}>
								<Link to={"#" + name} onClick={() => worksHandler(name)}>
									<img src={mockup.childImageSharp.fluid.src} alt={name} />
								</Link>
							</li>
						);
					})}
					{works.map(({ name, mockup }) => {
						return (
							<li className="portfolio__item" key={name}>
								<Link to={"#" + name} onClick={() => worksHandler(name)}>
									<img src={mockup.childImageSharp.fluid.src} alt={name} />
								</Link>
							</li>
						);
					})}
					{works.map(({ name, mockup }) => {
						return (
							<li className="portfolio__item" key={name}>
								<Link to={"#" + name} onClick={() => worksHandler(name)}>
									<img src={mockup.childImageSharp.fluid.src} alt={name} />
								</Link>
							</li>
						);
					})}
				</ul>
				<div className="scroll scroll--white portfolio__scroll">
					<div className="scroll__track">
						<div className="scroll__bar" style={{ top: "0%", transform: "translate(-50%, 0%)" }}></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Works;
