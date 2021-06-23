import React from "react";
import "../../assets/styles/main.scss";

import { graphql, useStaticQuery } from "gatsby";

// import Seo from "../parts/seo";
import Header from "../parts/header";
import Footer from "../parts/footer";

const query = graphql`
	query {
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

const getMenuData = (menu, currentPage) => {
	const index = menu.findIndex((item) => item.slug === currentPage);
	const prevPage = menu[index <= 0 ? menu.length - 1 : index - 1];
	const nextPage = menu[index >= menu.length - 1 ? 0 : index + 1];
	return { menu, prevPage, nextPage };
};

const DefaultLayout = ({ currentPage }) => {
	const data = useStaticQuery(query);
	const menuList = data.markdownRemark.frontmatter.menuList;
	return (
		<>
			<Header menu={menuList} currentPage={currentPage} />
			{/* <Seo data={seo} isHome={isHome} /> */}
			{/* <main>{children}</main> */}
			<Footer menu={getMenuData(menuList, currentPage)} currentPage={currentPage} />
		</>
	);
};

export default DefaultLayout;
