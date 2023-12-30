import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Electrolize&family=Roboto+Slab:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
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
