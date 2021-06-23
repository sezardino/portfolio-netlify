import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/";

const NotFoundPage = ({ location }) => {
	const currentPage = location.hash ? location.hash.replace("#", "") : "home";

	return <Layout currentPage={currentPage}>lolS</Layout>;
};

export default NotFoundPage;
