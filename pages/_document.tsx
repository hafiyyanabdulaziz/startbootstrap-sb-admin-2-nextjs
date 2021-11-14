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
          <link
            href='https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap'
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
