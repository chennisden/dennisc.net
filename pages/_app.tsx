import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="dc.svg" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Component {...pageProps} />
        <div className="mb-12 flex-grow" />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
