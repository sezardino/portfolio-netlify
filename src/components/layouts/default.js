import React from "react";
import "../../assets/styles/main.scss";
import Seo from "../parts/seo";

const DefaultLayout = ({ children, seo, isHome }) => {
	return (
		<>
			<Seo data={seo} isHome={isHome} />
			<main>{children}</main>
		</>
	);
};

export default DefaultLayout;
