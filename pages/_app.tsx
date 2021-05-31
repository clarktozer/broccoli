import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import { Footer, Page } from "../components";
import { Header } from "../components/Header";
import { LightTheme, useGlobalStyles } from "../theme";

export default function App({ Component, pageProps }: AppProps) {
    useGlobalStyles();

    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");

        if (jssStyles?.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <title>Broccoli &amp; Co.</title>
            </Head>
            <ThemeProvider theme={LightTheme}>
                <CssBaseline />
                <Page>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </Page>
            </ThemeProvider>
        </>
    );
}
