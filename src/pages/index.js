import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/";
import { HomeScreen, AboutScreen, SkillsScreen, WorksScreen, ContactScreen } from "../components/screens";

const getMenuData = (menu, currentPage) => {
	const index = menu.findIndex((item) => item.slug === currentPage);
	const prevPage = menu[index <= 0 ? menu.length - 1 : index - 1];
	const nextPage = menu[index >= menu.length - 1 ? 0 : index + 1];
	return { menu, prevPage, nextPage };
};

const NotFoundPage = ({ location, data }) => {
	const currentPage = location.hash ? location.hash.replace("#", "") : "home";
	const menuList = data.markdownRemark.frontmatter.menuList;

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
export default NotFoundPage;
