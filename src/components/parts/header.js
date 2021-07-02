import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "./logo";

const Header = ({ menu, currentPage }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	console.log(menu);
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
						{menu.menu.map((data) => (
							<li className="nav__item" key={data.slug}>
								<Link
									to={"#" + data.slug}
									className={`nav__link ${data.slug === currentPage.slug ? "nav__link--active" : ""}`}
									onClick={() => setMenuOpen(false)}
								>
									{data.label}
								</Link>
							</li>
						))}
					</ul>
					<div
						className="nav__line"
						style={{ left: `calc(${currentPage.index * (100 / menu.menu.length) + "%"} + 10px)` }}
					></div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
