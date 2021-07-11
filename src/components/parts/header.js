import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Logo from "./logo";

const Header = ({ menu, currentPage }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header className="header container">
			<button className="button button--hamburger header__button" onClick={() => setMenuOpen(true)}>
				<span className="hidden">open menu</span>
			</button>
			<Logo />
			<div className={`menu header__menu ${menuOpen ? "menu--active" : ""}`}>
				<button className="button button--close menu__button" onClick={() => setMenuOpen(false)}>
					<span className="hidden">close menu</span>
				</button>
				<nav className="nav menu__nav header__nav">
					<ul className="nav__list">
						{menu.map((data) => (
							<li className="nav__item" key={data.slug}>
								<AniLink
									cover
									bg="#1d1d1d"
									to={"/" + data.slug}
									activeClassName="nav__AniLink--active"
									className="nav__link"
									onClick={() => setMenuOpen(false)}
								>
									{data.label}
								</AniLink>
							</li>
						))}
					</ul>
					<div
						className="nav__line"
						style={{ left: `calc(${currentPage.index * (100 / menu.length) + "%"} + 10px)` }}
					></div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
