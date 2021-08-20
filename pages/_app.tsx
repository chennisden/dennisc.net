import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="dc.svg"
                />
            </Head>
            <NavBar />
            <Component {...pageProps}/>
            <Footer />
        </div>
    );
}

export default MyApp;