import React, { useEffect, useState } from "react";

import WorksList from "../../components/WorksPage/WorksList";
import PageTitle from "../../components/PageTitle";
import WorkModal from "../../containers/WorkModal";

const Works = ({ props, works }) => {
	const { html, screenTitle } = props;
	const [currentWork, setCurrentWork] = useState(null);

	const worksHandler = (name) => {
		const currentWork = works.find((item) => item.name === name);

		setCurrentWork(currentWork);
	};

	const closeHandler = () => {
		setCurrentWork(null);
	};

	useEffect(() => {
		const hash = window.location.hash?.slice(1);
		if (hash) {
			worksHandler(hash);
		}
	}, []);

	return (
		<section className="portfolio container">
			<PageTitle classes="title--portfolio portfolio__title" title={screenTitle} />
			<div className="portfolio__wrapper ">
				<div className="portfolio__info-text" dangerouslySetInnerHTML={{ __html: html }}></div>
				<WorksList className={"portfolio__list-wrapper"} works={works} handler={worksHandler} />
			</div>
			{currentWork && <WorkModal props={currentWork} closeHandler={closeHandler} />}
		</section>
	);
};

export default Works;
