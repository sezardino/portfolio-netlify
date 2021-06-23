import React from "react";
import "../../assets/styles/main.scss";

const WithoutSeoLayout = ({ children, seo }) => {
	return (
		<>
			<main>{children}</main>
		</>
	);
};

export default WithoutSeoLayout;
