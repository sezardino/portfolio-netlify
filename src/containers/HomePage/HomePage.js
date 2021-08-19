import React, { useEffect, useRef } from "react";
import useGsap from "../../hooks/useGsap";

const Home = ({ props }) => {
	const tl = useGsap();
	const { image, screenTitle, subtitle, title } = props;

	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const subtitleRef = useRef(null);

	useEffect(() => {
		const img = imageRef.current;
		const title = titleRef.current;
		const subtitle = subtitleRef.current;
		tl.addLabel("start")
			.to(title, { opacity: 1 })
			.fromTo(title.children, { x: "-=100%", opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5, duration: 1.5 })
			.fromTo(subtitle, { x: "-=100%" }, { x: 0, opacity: 1, duration: 1.5 })
			.fromTo(img, { x: "+=100%" }, { x: 0, opacity: 1, duration: 1.5 }, "start+1");
	}, []);

	return (
		<section className="hero container">
			<h1 className="hidden">{title}</h1>
			<div className="hero__img" ref={imageRef} style={{ opacity: 0 }}>
				<img src={image.childImageSharp.fluid.src} alt={title} />
			</div>
			<div className="hero__wrapper">
				<h2 className="title title--hero hero__title" ref={titleRef} style={{ opacity: 0 }}>
					{screenTitle.map((item, index) => (
						<span
							key={item}
							className={`title title--${index === 0 ? "name" : "surname"} hero__title--name`}
						>
							{item}
						</span>
					))}
				</h2>
				<p className="text text--hero hero__text" ref={subtitleRef} style={{ opacity: 0 }}>
					{subtitle}
				</p>
			</div>
		</section>
	);
};

export default Home;
