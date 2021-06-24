import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/works.md/" }) {
			frontmatter {
				screenTitle
				infoText
			}
		}
	}
`;

const Works = () => {
	const data = useStaticQuery(query);
	const { infoText, screenTitle } = data.markdownRemark.frontmatter;
	return (
		<section className="portfolio container">
			<h2 className="title title--main title--portfolio portfolio__title">
				{screenTitle.map((word, index) => {
					return (
						<span
							className={`row  animate__animated animate__rotateInDownRight animate__delay-1${index}`}
							key={word}
						>
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
				<ul className="portfolio__list  undefined animate__delay-1">
					{/* {data.works.map((item) => {
						const image = getImage(item.node.frontmatter.projectImage.preview);
						return (
							<li
								className="portfolio__item  animate__animated animate__flipInX animate__delay-14"
								key={item.node.id}
							>
								<Link to={item.node.fields.slug}>
									<GatsbyImage image={image} alt={item.node.frontmatter.title} />
								</Link>
							</li>
						);
					})} */}
				</ul>
				<div className="scroll scroll--white portfolio__scroll  animate__animated animate__fadeIn animate__delay-5">
					<div className="scroll__track">
						<div className="scroll__bar" style={{ top: "0%", transform: "translate(-50%, 0%)" }}></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Works;
