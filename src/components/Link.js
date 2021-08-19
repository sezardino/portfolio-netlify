import React from "react";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ slug, handler, label, hidden = false, classes = "", activeClass = "" }) => {
	const clickHandler = () => {
		if (handler) {
			handler();
		}
	};

	return (
		<GatsbyLink to={"/" + slug} activeClassName={activeClass} className={classes} onClick={clickHandler}>
			{hidden ? <span className="hidden">{label}</span> : label}
		</GatsbyLink>
	);
};

export default Link;
