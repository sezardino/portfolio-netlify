import React from "react";
import Link from "./link";

const Footer = ({ menu, links }) => {
	const { next, prev, current } = links;
	return (
		<footer className="footer container">
			<Link
				slug={prev?.slug}
				label={`To ${prev?.label}`}
				hidden={true}
				classes="button button-arrow button-arrow--prev footer__prev"
			/>
			<div className="footer__line">
				<div
					className="footer__current"
					style={{
						maxWidth: `${100 / menu.length}%`,
						left: current?.index * (100 / menu.length) + "%",
					}}
				></div>
			</div>
			<Link
				slug={next?.slug}
				label={`To ${next?.label}`}
				hidden={true}
				classes="button button-arrow button-arrow--next footer__next"
			/>
		</footer>
	);
};

export default Footer;
