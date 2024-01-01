import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/images/favicon-32x32.png" />
          <meta property="og:image" content="/images/preview.jpg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="1184" />
          <meta property="og:image:height" content="618" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
