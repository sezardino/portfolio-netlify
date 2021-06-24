import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/";
import * as components from "../components/screens";

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
	const { nextPage, prevPage, menu } = getMenuData(menuList, currentPage);

	const screens = menu.map((screen) => ({ ...screen, component: components[`${screen.label}Screen`] }));

	return (
		<Layout menu={getMenuData(menuList, currentPage)} currentPage={currentPage}>
			<div className="screens">
				{screens.map(({ slug, component: Component }) => {
					const className =
						currentPage.slug === slug
							? "screen--current"
							: nextPage.slug === slug
							? "screen--next"
							: prevPage.slug === slug
							? "screen--prev"
							: "";
					return (
						<div className={`screen ${className}`} key={slug}>
							<Component isCurrent={currentPage.slug === slug} />
						</div>
					);
				})}
				{/* <div className="screen">
					<AboutScreen />
				</div>
				<div className="screen">
					<SkillsScreen />
				</div>
				<div className="screen">
					<WorksScreen />
				</div>
				<div className="screen">
					<ContactScreen />
				</div> */}
			</div>
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
