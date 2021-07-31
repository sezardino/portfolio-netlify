import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Seo from "@/components/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { getMenuData } from "@/utils";

import "@/assets/styles/main.scss";

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
