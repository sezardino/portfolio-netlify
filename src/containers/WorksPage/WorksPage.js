import React from "react";

import WorksList from "../../components/WorksPage/WorksList";
import PageTitle from "../../components/PageTitle";

const Works = ({ props, works }) => {
	const { html, screenTitle } = props;

	return (
		<section className="portfolio container">
			<PageTitle classes="title--portfolio portfolio__title" title={screenTitle} />
			<div className="portfolio__wrapper ">
				<div className="portfolio__info-text" dangerouslySetInnerHTML={{ __html: html }}></div>
				<WorksList className={"portfolio__list-wrapper"} works={works} />
			</div>
		</section>
	);
};

export default Works;
