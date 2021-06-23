import React from "react";
import { Link } from "gatsby";

const Footer = ({ menu, currentPage }) => {
	const { menu: menuList, prevPage, nextPage } = menu;
	return (
		<footer className="footer container">
			<Link to={"#" + prevPage.slug} className="button button-arrow button-arrow--prev footer__prev">
				<span className="hidden">To {prevPage.label}</span>
			</Link>
			<div className="nav nav--footer footer__nav">
				{menuList.map((item) => {
					return (
						<div
							className={`nav__link
							${item.slug === currentPage ? "nav__link--active" : ""}`}
							key={item.slug}
						>
							<span className="hidden">{item.title}</span>
						</div>
					);
				})}
			</div>
			<Link to={"#" + nextPage.slug} className="button button-arrow button-arrow--next footer__next">
				<span className="hidden">To {nextPage.label}</span>
			</Link>
		</footer>
	);
};

export default Footer;
