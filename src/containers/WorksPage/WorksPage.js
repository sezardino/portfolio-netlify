import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useGsap from "../../hooks/useGsap";

import WorksList from "../../components/WorksPage/WorksList";
import PageTitle from "../../components/PageTitle";

const Works = ({ props, works }) => {
	const { html, screenTitle } = props;
	const tl = useGsap();
	const titleRef = useRef(null);
	const infoRef = useRef(null);
	const listRef = useRef(null);

	useEffect(() => {
		const title = titleRef.current;
		const info = infoRef.current;
		const list = listRef.current;

		tl.set([title, info, list], { opacity: 0 })
			.to([title, list], { opacity: 1 })
			.fromTo(title.children, { x: "+=100%", opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5, duration: 1.5 })
			.fromTo(info, { x: "-=100%", opacity: 0 }, { x: 0, opacity: 1, duration: 1.5 })
			.fromTo(list.children, { rotateY: "90deg" }, { rotateY: 0, duration: 1.5, opacity: 1, stagger: 0.5 });
	}, []);

	return (
		<section className="portfolio container">
			<PageTitle classes="title--portfolio portfolio__title" title={screenTitle} ref={titleRef} />
			<div className="portfolio__wrapper ">
				<div
					className="portfolio__info-text"
					dangerouslySetInnerHTML={{ __html: html }}
					ref={infoRef}
					style={{ opacity: 0 }}
				></div>
				<WorksList className={"portfolio__list-wrapper"} works={works} ref={listRef} />
			</div>
		</section>
	);
};

export default Works;
