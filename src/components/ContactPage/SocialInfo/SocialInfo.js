import React from "react";

const SocialInfo = ({ data, classes }, ref) => {
	return (
		<ul className={`social ${classes}`} ref={ref}>
			{data.map((item) => {
				return (
					<li className="social__item" key={item.name} style={{ opacity: 0 }}>
						<a href={item.link} target="blank" className="social__link" title={item.name}>
							{item.label}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

const forwardRef = React.forwardRef(SocialInfo);

export default forwardRef;
