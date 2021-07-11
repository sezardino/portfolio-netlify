import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/";
import * as components from "../components/screens";

const getMenuData = (menu, { index }) => {
	const nextPage = menu[index + 1 >= menu.length ? 0 : index + 1];
	const prevPage = menu[index - 1 < 0 ? menu.length - 1 : index - 1];
	return { menu, prevPage, nextPage };
};

const getScreenIndex = (array, slug) => array.findIndex((screen) => screen.slug === slug);

const IndexPage = ({ location, data }) => {
	const menuList = data.markdownRemark.frontmatter.menuList;
	const currentPage = {};
	currentPage.slug = location.hash ? location.hash.replace("#", "") : "home";
	currentPage.index = menuList.findIndex((item) => item.slug === currentPage.slug);
	const menuData = getMenuData(menuList, currentPage);
	const { nextPage, prevPage, menu } = menuData;

	const screens = menu.map((screen) => ({ ...screen, component: components[`${screen.label}Screen`] }));

	return (
		<Layout menu={menuData} currentPage={currentPage}>
			<div className="screens">
				{screens.map(({ slug, component: Component }) => {
					let className;
					const pageIndex = getScreenIndex(screens, slug);
					if (currentPage.index === pageIndex) {
						className = "screen--current";
					} else if (pageIndex < currentPage.index) {
						className = "screen--prev";
					} else if (pageIndex > currentPage.index) {
						className = "screen--next";
					}
					return (
						<div className={`screen ${className}`} key={slug}>
							<Component isCurrent={currentPage.slug === slug} />
						</div>
					);
				})}
			</div>
		</Layout>
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

export { query };
export default IndexPage;
