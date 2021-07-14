import React from "react";
import { Helmet } from "react-helmet";
import useImages from "../../hooks/useImages";
import useMeta from "../../hooks/useMeta";

const Seo = ({ data }) => {
	if (!data) {
		return <p className="visually-hidden">404</p>;
	}
	const {
		title,
		description,
		image: {
			childImageSharp: {
				fluid: { src: ogImg },
			},
		},
	} = data;
	const { appleIcon, fav16, fav32 } = useImages();
	const { siteName, siteDesc, keywords } = useMeta();
	const siteTitle = title ? `${title} | ${siteName}` : siteName;

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

			<meta name="theme-color" content="#1d1d1d" />

			<meta property="og:type" content="business.business" />
			<meta property="og:title" content={data.title} />
			<meta property="og:url" content="/" />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImg} />
		</Helmet>
	);
};

export default Seo;
