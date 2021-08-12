import type { AppProps } from "next/app";
import "../styles/global.css";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <NavBar />
            <Component {...pageProps}/>
            <Footer />
        </div>
    );
}

export default MyApp;