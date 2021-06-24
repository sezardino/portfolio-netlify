import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/";
import { HomeScreen, AboutScreen, SkillsScreen, WorksScreen, ContactScreen } from "../components/screens";

const getMenuData = (menu, { index }) => {
	const nextPage = menu[index + 1 >= menu.length ? 0 : index + 1];
	const prevPage = menu[index - 1 < 0 ? menu.length - 1 : index - 1];
	return { menu, prevPage, nextPage };
};

const IndexPage = ({ location, data }) => {
	const menuList = data.markdownRemark.frontmatter.menuList;
	const currentPage = {};
	currentPage.slug = location.hash ? location.hash.replace("#", "") : "home";
	currentPage.index = menuList.findIndex((item) => item.slug === currentPage.slug);
	return (
		<Layout menu={getMenuData(menuList, currentPage)} currentPage={currentPage}>
			<HomeScreen />
			<AboutScreen />
			<SkillsScreen />
			<WorksScreen />
			<ContactScreen />
		</Layout>
	);
};

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

export { query };
export default IndexPage;
