import "../node_modules/startbootstrap-sb-admin-2/css/sb-admin-2.min.css";
import "../node_modules/startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
