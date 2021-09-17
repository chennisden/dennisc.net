import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import "styles/global.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Back from "@/components/Back";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const paths = asPath.split("/");
  var backPaths = asPath.split("/");
  backPaths.pop();
  return (
    <div>
      <Head>
        <title>Dennis Chen</title>
        <link rel="shortcut icon" type="image/x-icon" href="dc.svg" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="my-6" />
        <div className="flex justify-center">
          <div className="mx-12 w-full max-w-screen-sm space-y-2">
            {paths[1] != "" && <Back href={backPaths.join("/") + "/"} />}
            <Component {...pageProps} />
          </div>
        </div>
        <div className="flex-grow my-6" />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
