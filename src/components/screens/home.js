import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
			frontmatter {
				title
				screenTitle
				subtitle
				image {
					childImageSharp {
						fluid(quality: 100) {
							src
						}
					}
				}
			}
		}
	}
`;

const Home = () => {
	const data = useStaticQuery(query);
	const { image, screenTitle, subtitle, title } = data.markdownRemark.frontmatter;
	return (
		<section className="screen hero container animate__animated ">
			<h1 className="hidden">{title}</h1>
			<div className="hero__img animate__animated animate__fadeInBottomRight">
				<img src={image.childImageSharp.fluid.src} alt={title} />
			</div>
			<div className="hero__wrapper">
				<h2 className="title title--hero hero__title">
					{screenTitle.map((item, index) => (
						<span
							key={item}
							className={`title title--${
								index === 0 ? "name" : "surname"
							} hero__title--name animate__delay-${
								index === 0 ? "12" : "13"
							} animate__animated animate__fadeInBottomLeft`}
						>
							{item}
						</span>
					))}
				</h2>
				<p className="text text--hero hero__text animate__animated animate__delay-14 animate__animated animate__fadeInBottomLeft">
					{subtitle}
				</p>
			</div>
		</section>
	);
};

export default Home;
