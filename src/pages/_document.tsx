import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
        <title>Chico's Lawn Service</title>
          <meta name="title" content="Chico&#39;s Lawn Service" />
          <meta name="description" content="Operating in the Chicagoland area - trusted for over 25 years!" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://chicoslawnservice.com" /> 
          <meta property="og:title" content="Chico&#39;s Lawn Service" />
          <meta property="og:description" content="Operating in the Chicagoland area - trusted for over 25 years!" />
          <meta property="og:image" content="https://chicoslawnservice.com/logo.webp" /> 

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://chicoslawnservice.com" /> 
          <meta property="twitter:title" content="Chico&#39;s Lawn Service" />
          <meta property="twitter:description" content="Operating in the Chicagoland area - trusted for over 25 years!" />
          <meta property="twitter:image" content="https://chicoslawnservice.com/logo.webp" /> 

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
