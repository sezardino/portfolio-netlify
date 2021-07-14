import React from "react";
import "../assets/styles/main.scss";

import Seo from "../components/parts/seo";
import Header from "../components/parts/header";
import Footer from "../components/parts/footer";
import { useStaticQuery, graphql } from "gatsby";
import { useEffect } from "react";

const getMenuData = (menu, { index }) => {
	const nextPage = menu[index + 1 >= menu.length ? 0 : index + 1];
	const prevPage = menu[index - 1 < 0 ? menu.length - 1 : index - 1];
	return { menu, prevPage, nextPage };
};

const Layout = ({ children, seo }) => {
	const data = useStaticQuery(query);
	const menuList = data.markdownRemark.frontmatter.menuList;
	const currentPage = {};
	useEffect(() => {
		currentPage.slug = location.pathname ? location.pathname.replaceAll("/", "") : "home";
		currentPage.index = menuList.findIndex((item) => item.slug === currentPage.slug);
	}, []);
	const menuData = getMenuData(menuList, currentPage);
	const { nextPage, prevPage, menu } = menuData;

	return (
		<>
			<Header menu={menu} currentPage={currentPage} />
			<Seo data={seo} />
			<main>{children}</main>
			<Footer menu={{ menu, nextPage, prevPage }} currentPage={currentPage} />
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
