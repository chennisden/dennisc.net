import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Back from "components/Back";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Dennis Chen</title>
        <link rel="shortcut icon" type="image/x-icon" href="dc.svg" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="my-6" />
        <Back href="." />
        <Component {...pageProps} />
        <div className="flex-grow my-6" />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
