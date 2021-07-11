import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const Works = ({ props }) => {
	const data = useStaticQuery(query);
	const works = data.allMarkdownRemark.edges;
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
					{works.map((item) => {
						const { title, mockup } = item.node.frontmatter;
						return (
							<li className="portfolio__item" key={title}>
								<Link to={"#" + title}>
									<img src={mockup.childImageSharp.fluid.src} alt={title} />
								</Link>
							</li>
						);
					})}
					{works.map((item) => {
						const { title, mockup } = item.node.frontmatter;
						return (
							<li className="portfolio__item" key={title}>
								<Link to={"#" + title}>
									<img src={mockup.childImageSharp.fluid.src} alt={title} />
								</Link>
							</li>
						);
					})}
					{works.map((item) => {
						const { title, mockup } = item.node.frontmatter;
						return (
							<li className="portfolio__item" key={title}>
								<Link to={"#" + title}>
									<img src={mockup.childImageSharp.fluid.src} alt={title} />
								</Link>
							</li>
						);
					})}
					{works.map((item) => {
						const { title, mockup } = item.node.frontmatter;
						return (
							<li className="portfolio__item" key={title}>
								<Link to={"#" + title}>
									<img src={mockup.childImageSharp.fluid.src} alt={title} />
								</Link>
							</li>
						);
					})}
					{works.map((item) => {
						const { title, mockup } = item.node.frontmatter;
						return (
							<li className="portfolio__item" key={title}>
								<Link to={"#" + title}>
									<img src={mockup.childImageSharp.fluid.src} alt={title} />
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

const query = graphql`
	query {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
			edges {
				node {
					frontmatter {
						mockup {
							childImageSharp {
								fluid(quality: 100) {
									src
								}
							}
						}
						title
					}
				}
			}
		}
	}
`;

export default Works;
