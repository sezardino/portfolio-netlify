import React from "react";
import Footer from "../parts/footer";
import "../../assets/styles/main.scss";
import Seo from "../parts/seo";
import Header from "../parts/header";

const DefaultLayout = ({ children, seo, isHome }) => {
    return (
        <>
            <Seo data={seo} isHome={isHome} />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default DefaultLayout;
