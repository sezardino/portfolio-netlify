import React from "react";
import "../../assets/styles/main.scss";

// import Seo from "../parts/seo";
import Header from "../parts/header";
import Footer from "../parts/footer";

const DefaultLayout = ({ currentPage, menu, children }) => {
	return (
		<>
			<Header menu={menu} currentPage={currentPage} />
			{/* <Seo data={seo} isHome={isHome} /> */}
			<main>{children}</main>
			<Footer menu={menu} currentPage={currentPage} />
		</>
	);
};

export default DefaultLayout;
