import "../node_modules/startbootstrap-sb-admin-2/css/sb-admin-2.min.css";
import "../node_modules/startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='description' content='' />
        <meta name='author' content='' />

        <title>SB Admin 2 - Login</title>

        {/* <!-- Custom fonts for this template--> */}
        {/* <link
          href='vendor/fontawesome-free/css/all.min.css'
          rel='stylesheet'
          type='text/css'
        /> */}
        <link
          href='https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'
          rel='stylesheet'
        />

        {/* <!-- Custom styles for this template--> */}
        {/* <link href='css/sb-admin-2.min.css' rel='stylesheet' /> */}
      </Head>
      <Component {...pageProps} />

      {/* <!-- Bootstrap core JavaScript--> */}
      <Script
        type='text/javascript'
        src='/startbootstrap-sb-admin-2/vendor/jquery/jquery.min.js'></Script>
      <Script
        type='text/javascript'
        src='/startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js'></Script>

      {/* <!-- Core plugin JavaScript--> */}
      <Script
        type='text/javascript'
        src='/startbootstrap-sb-admin-2/vendor/jquery-easing/jquery.easing.min.js'></Script>

      {/* <!-- Custom scripts for all pages--> */}
      <Script
        type='text/javascript'
        src='/startbootstrap-sb-admin-2/js/sb-admin-2.min.js'></Script>

      {/* <!-- Page level plugins --> */}
      <Script
        type='text/javascript'
        src='startbootstrap-sb-admin-2/vendor/chart.js/Chart.min.js'></Script>

      {/* <!-- Page level custom scripts --> */}
      <Script
        type='text/javascript'
        src='/startbootstrap-sb-admin-2/js/demo/chart-area-demo.js'></Script>
      <Script
        type='text/javascript'
        src='/startbootstrap-sb-admin-2/js/demo/chart-pie-demo.js'></Script>
      <Script
        type='text/javascript'
        src='/startbootstrap-sb-admin-2/js/demo/chart-bar-demo.js'></Script>
    </>
  );
}

export default MyApp;
