import type { AppProps } from "next/app";
import Head from "next/head";
import "startbootstrap-sb-admin-2/css/sb-admin-2.min.css";
import "startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SB Admin 2 - Dashboard</title>

        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='description' content='' />
        <meta name='author' content='' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
