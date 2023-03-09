import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next linkedin post in seconds."
          />
          <meta property="og:site_name" content="linkedinpost.com" />
          <meta
            property="og:description"
            content="Generate your next linkedin post in seconds."
          />
          <meta property="og:title" content="linkedin post Generator" />
          <meta name="linkedin:card" content="summary_large_image" />
          <meta name="linkedin:title" content="linkedin post Generator" />
          <meta
            name="linkedin:description"
            content="Generate your next linkedin post in seconds."
          />
          <meta
            property="og:image"
            content="https://linkedinpost.com/og-image.png"
          />
          <meta
            name="linkedin:image"
            content="https://linkedinpost.com/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
