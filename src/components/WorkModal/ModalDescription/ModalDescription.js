import React from "react";

const ModalDescription = ({ classes, data }) => {
	const { name, repo, viewLink, technologies, description } = data;
	return (
		<div className={`description ${classes}`}>
			<h2 className="title title--main title--popup description__title">{name}</h2>
			<div className="description__buttons">
				<a href={repo} target="blank" className="button button--github button--popup description__button">
					View on GitHub
				</a>
				<a href={viewLink} target="blank" className="button button--ghpages button--popup description__button">
					View
				</a>
			</div>
			{technologies && (
				<div className="technologies description__technologies">
					<h3 className="title title--technologies technologies__title">Using Technologies</h3>
					<ul className="technologies__list">
						{technologies.map(({ technology }) => (
							<li className="technologies__item" key={technology}>
								{technology}
							</li>
						))}
					</ul>
				</div>
			)}
			{description && (
				<div className="description__text">
					<h3 className="title title--technologies">Description</h3>
					<div className="description__text-body" dangerouslySetInnerHTML={{ __html: description }}></div>
				</div>
			)}
		</div>
	);
};

export default ModalDescription;
