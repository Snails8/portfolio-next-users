import {useEffect, useState} from "react";
import Head from "next/head";
import Router from "next/router";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import {Container} from "react-bootstrap";

const Layout = ({ children, title = 'title' }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="robots" content="noindex" />
                {/*<meta name="csrf-token" content="{{ csrf_token() }}">    */}
                {/*<link rel="icon" type="image/x-icon" href={process.env.NEXT_PUBLIC_HB_URL +'//hogehoge'} />*/}
            </Head>

            <Header/>

            <Container>
                {children}
            </Container>

            <Footer/>

        </>
    )
}

export default Layout;