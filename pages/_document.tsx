import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <meta name='description' content='' />
          <meta name='author' content='' />

          <title>SB Admin 2 - Dashboard</title>

          {/* <!-- Custom fonts for this template--> */}
          <link
            href='startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css'
            rel='stylesheet'
            type='text/css'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'
            rel='stylesheet'
          />

          {/* <!-- Custom styles for this template--> */}
          <link
            href='startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Bootstrap core JavaScript--> */}
          <script src='startbootstrap-sb-admin-2/vendor/jquery/jquery.min.js'></script>
          <script src='startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>

          {/* <!-- Core plugin JavaScript--> */}
          <script src='startbootstrap-sb-admin-2/vendor/jquery-easing/jquery.easing.min.js'></script>

          {/* <!-- Custom scripts for all pages--> */}
          <script src='startbootstrap-sb-admin-2/js/sb-admin-2.min.js'></script>

          {/* <!-- Page level plugins --> */}
          <script src='startbootstrap-sb-admin-2/vendor/chart.js/Chart.min.js'></script>

          {/* <!-- Page level custom scripts --> */}
          <script src='startbootstrap-sb-admin-2/js/demo/chart-area-demo.js'></script>
          <script src='startbootstrap-sb-admin-2/js/demo/chart-pie-demo.js'></script>
          <script src='startbootstrap-sb-admin-2/js/demo/chart-bar-demo.js'></script>

          {/* <!-- Page level plugins --> */}
          <script src='startbootstrap-sb-admin-2/vendor/datatables/jquery.dataTables.min.js'></script>
          <script src='startbootstrap-sb-admin-2/vendor/datatables/dataTables.bootstrap4.min.js'></script>

          {/* <!-- Page level custom scripts --> */}
          <script src='startbootstrap-sb-admin-2/js/demo/datatables-demo.js'></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
