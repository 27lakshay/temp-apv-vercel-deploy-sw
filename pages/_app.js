import Head from "next/head";
import "../styles/globals.scss";
import "../styles/home.scss";
import "../styles/categories.scss";

export default function CustomApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>APV</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
