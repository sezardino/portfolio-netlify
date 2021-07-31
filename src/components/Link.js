import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Link = ({ slug, handler, label, hidden = false, classes = "", activeClass = "" }) => {
	const clickHandler = () => {
		if (handler) {
			handler();
		}
	};

	return (
		<AniLink
			cover
			bg="#1d1d1d"
			to={"/" + slug}
			activeClassName={activeClass}
			className={classes}
			onClick={clickHandler}
		>
			{hidden ? <span className="hidden">{label}</span> : label}
		</AniLink>
	);
};

export default Link;
