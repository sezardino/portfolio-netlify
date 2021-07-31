import React from "react";

const SocialInfo = ({ data, classes }) => {
	return (
		<ul className={`social ${classes}`}>
			{data.map((item) => {
				return (
					<li className="social__item" key={item.name}>
						<a href={item.link} target="blank" className="social__link" title={item.name}>
							{item.label}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialInfo;
