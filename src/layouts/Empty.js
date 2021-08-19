import React from "react";

import Seo from "../components/Seo";

const EmptyLayout = ({ children, seo }) => {
	return (
		<>
			<Seo data={seo} />
			<main>{children}</main>
		</>
	);
};

export default EmptyLayout;
