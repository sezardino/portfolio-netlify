import React from "react";

const Title = ({ title, subtitle }) => {
	return (
		<div className="hero__wrapper">
			<h2 className="title title--hero hero__title">
				{title.map((item, index) => (
					<span key={item} className={`title title--${index === 0 ? "name" : "surname"} hero__title--name`}>
						{item}
					</span>
				))}
			</h2>
			<p className="text text--hero hero__text">{subtitle}</p>
		</div>
	);
};

export default Title;
