import React from "react";
import { Helmet } from "react-helmet";
import useMeta from "../hooks/useMeta";

const Seo = ({ data, isHome }) => {
    const meta = useMeta();
    const { images } = meta;

    const title = data.title ? `${data.title} | ${meta.name}` : meta.name;
    return (
        <Helmet>
            <html lang="pl" />
            <title>{title}</title>
            <meta name="description" content={meta.description} />
            {isHome && (
                <meta
                    name="google-site-verification"
                    content="-9i1BR1MqAdyrjdddRtvQEtXN1Xa9hPv1XyyJa2qXw8"
                />
            )}

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={images.apple_touch_icon.publicURL}
            />
            <link
                rel="icon"
                type="image/png"
                href={images.fav_32.publicURL}
                sizes="32x32"
            />
            <link
                rel="icon"
                type="image/png"
                href={images.fav_16.publicURL}
                sizes="16x16"
            />

            <link
                rel="mask-icon"
                href={images.mask_icon.publicURL}
                color="#ff4400"
            />

            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.title} />
            <meta property="og:url" content="/" />
            <meta property="og:description" content={data.description} />
            <meta property="og:image" content={data.image.publicURL} />
        </Helmet>
    );
};

export default Seo;
