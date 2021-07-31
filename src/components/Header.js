import React, { useState } from "react";

import Link from "./Link";
import Logo from "./Logo";

const Header = ({ menu }) => {
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
								<Link
									slug={data?.slug}
									label={data?.label}
									activeClass="nav__link--active"
									classes="nav__link"
									handler={() => setMenuOpen(false)}
								/>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
