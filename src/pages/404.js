import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/withoutSeo";

const NotFoundPage = ({ data }) => {
	return <Layout></Layout>;
};

const query = graphql`
	query {

	}
`;

export { query };
export default NotFoundPage;
