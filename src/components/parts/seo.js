import React from "react";
import { Helmet } from "react-helmet";
import useImages from "../../hooks/useImages";
import useMeta from "../../hooks/useMeta";

const Seo = ({ data }) => {
	const { appleIcon, fav16, fav32 } = useImages();
	const { siteName, siteDesc, keywords } = useMeta();
	const siteTitle = data?.title ? `${data?.title} | ${siteName}` : siteName;

	return (
		<Helmet title="some title">
			<html lang="en" />
			<title>{siteTitle}</title>
			<meta name="description" content={siteDesc} />
			<meta name="keywords" content={`${keywords}`} />

			<link rel="apple-touch-icon" sizes="180x180" href={appleIcon.publicURL} />
			<link rel="icon" type="image/png" href={fav32.publicURL} sizes="32x32" />
			<link rel="icon" type="image/png" href={fav16.publicURL} sizes="16x16" />

			<link rel="mask-icon" href={appleIcon.publicURL} color="#ff4400" />

			{data && <meta property="og:type" content="business.business" />}
			{data && <meta property="og:title" content={data.title} />}
			{data && <meta property="og:url" content="/" />}
			{data && <meta property="og:description" content={data.description} />}
			{data && <meta property="og:image" content={data.image.childImageSharp.fluid.src} />}
		</Helmet>
	);
};

export default Seo;
