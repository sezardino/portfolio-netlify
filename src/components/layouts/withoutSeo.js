import React from "react";
import Footer from "../parts/footer";
import "../../assets/styles/main.scss";
import Header from "../parts/header";

const WithoutSeoLayout = ({ children, seo }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default WithoutSeoLayout;
