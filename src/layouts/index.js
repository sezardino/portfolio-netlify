import React from "react";
import "../assets/styles/main.scss";

import Seo from "../components/parts/seo";
import Header from "../components/parts/header";
import Footer from "../components/parts/footer";
import { useStaticQuery, graphql } from "gatsby";
import { useEffect } from "react";
import { useState } from "react";

const getMenuData = (menu, index) => {
	const next = menu[index + 1 >= menu.length ? 0 : index + 1];
	const prev = menu[index - 1 < 0 ? menu.length - 1 : index - 1];
	return { prev, next };
};

const Layout = ({ children, seo }) => {
	const data = useStaticQuery(query);
	const menuList = data.markdownRemark.frontmatter.menuList;

	const [links, setLinks] = useState({});

	useEffect(() => {
		const slug = window.location.pathname ? window.location.pathname.replaceAll("/", "") : "home";
		const index = menuList.findIndex((item) => item.slug === slug);

		const current = {
			slug,
			index,
		};

		const { next, prev } = getMenuData(menuList, index);
		setLinks({ next, prev, current });
	}, []);
	return (
		<>
			<Header menu={menuList} />
			<Seo data={seo} />
			<main>{children}</main>
			{seo && <Footer menu={menuList} links={links} />}
		</>
	);
};

const query = graphql`
	{
		markdownRemark(fileAbsolutePath: { regex: "/menu/" }) {
			frontmatter {
				menuList {
					label
					slug
				}
			}
		}
	}
`;

export default Layout;
