import React from "react";

const Home = ({ props }) => {
	const { image, screenTitle, subtitle, title } = props;
	return (
		<section className="hero container">
			<h1 className="hidden">{title}</h1>
			<div className="hero__img">
				<img src={image.childImageSharp.fluid.src} alt={title} />
			</div>
			<div className="hero__wrapper">
				<h2 className="title title--hero hero__title">
					{screenTitle.map((item, index) => (
						<span
							key={item}
							className={`title title--${index === 0 ? "name" : "surname"} hero__title--name`}
						>
							{item}
						</span>
					))}
				</h2>
				<p className="text text--hero hero__text">{subtitle}</p>
			</div>
		</section>
	);
};

export default Home;
