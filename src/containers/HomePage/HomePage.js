import React from "react";

import HomeWrapper from "@/components/HomePage/HomeWrapper";

const Home = ({ props }) => {
	const { image, screenTitle, subtitle, title } = props;
	return (
		<section className="hero container">
			<h1 className="hidden">{title}</h1>
			<div className="hero__img">
				<img src={image.childImageSharp.fluid.src} alt={title} />
			</div>
			<HomeWrapper title={screenTitle} subtitle={subtitle} />
		</section>
	);
};

export default Home;
