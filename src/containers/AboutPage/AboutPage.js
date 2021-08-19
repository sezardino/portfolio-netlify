import React, { useEffect, useRef } from "react";
import PageTitle from "../../components/PageTitle";
import useGsap from "../../hooks/useGsap";

const About = ({ props }) => {
	const { html, screenTitle } = props;
	const wrapperRef = useRef(null);
	const titleRef = useRef(null);
	const tl = useGsap();

	useEffect(() => {
		const wrapper = wrapperRef.current;
		const title = titleRef.current;

		tl.to([wrapper, title], { opacity: 1 })
			.fromTo(title.children, { x: "+=100%", opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5, duration: 1.5 })
			.fromTo(wrapper.children, { x: "-=100%", opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5, duration: 1.5 });
	}, []);

	return (
		<section className="about container">
			<PageTitle title={screenTitle} classes="title--about about__title" ref={titleRef} />
			<div
				className="about__wrapper text--about"
				dangerouslySetInnerHTML={{ __html: html }}
				ref={wrapperRef}
				style={{ opacity: 0 }}
			></div>
		</section>
	);
};

export default About;
