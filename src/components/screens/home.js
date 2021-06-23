import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import ImageComponent from "../components/image";

import Layout from "../components/layout";

const Home = ({ data }) => {
	const fields = data.markdownRemark.frontmatter;
	const props = {
		name: fields.name,
		surname: fields.surname,
		position: fields.position,
		image: fields.image,
	};
	return (
		<Layout title={fields.title}>
			<HomeTemplate data={props} />
		</Layout>
	);
};

const HomeTemplate = ({ data }) => {
	const imageProps = {
		sharp: data.image.childImageSharp,
		ext: data.image.extension,
		style: {},
		url: data.image.publicURL,
		alt: `${data.name} ${data.surname}`,
	};
	const image = getImage(data.image.childImageSharp);
	return (
		<section className="hero container animate__animated ">
			<div className="hero__img animate__animated animate__fadeInBottomRight">
				<ImageComponent data={imageProps} />
			</div>
			<div className="hero__wrapper undefined">
				<h2 className="title title--hero hero__title">
					<span className="title title--name hero__title--name animate__delay-12 animate__animated animate__fadeInBottomLeft">
						{data.name}
					</span>
					<span className="title title--surname hero__title--surname animate__animated animate__delay-13 animate__animated animate__fadeInBottomLeft">
						{data.surname}
					</span>
				</h2>
				<p className="text text--hero hero__text animate__animated animate__delay-14 animate__animated animate__fadeInBottomLeft">
					{data.position}
				</p>
			</div>
		</section>
	);
};

export default Home;
