import Head from "next/head";
import Layout from "../components/common/layout";
import "../styles/globals.scss";

export default function CustomApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>APV</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}