import React, { useState } from "react";
import { Link } from "gatsby";
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
				<nav className="nav nav--header menu__nav header__nav">
					{menu.menu.map((data, index) => (
						<Link
							to={"#" + data.slug}
							className={`nav__link ${data.slug === currentPage ? "nav__link--active" : ""}`}
							key={`${index}+${data.title}`}
						>
							{data.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
