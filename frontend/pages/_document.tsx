import Document, { Html, Head, Main, NextScript } from "next/document"
import { AppContext } from "../components/AppContext"
import { ServerStyleSheet } from "styled-components"
import GlobalStyle from "../globalStyles"

type Props = {
  pageProps: any
}

class MyDocument extends Document<Props> {
  static getInitialProps = async (ctx: AppContext): Promise<any> => {
    const originalRenderPage = ctx.renderPage
    const sheet = new ServerStyleSheet()

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    const pageProps = ctx.store.getState()
    const styleTags = sheet.getStyleElement()

    return {
      ...initialProps,
      pageProps,
      styles: (
        <>
          {styleTags}
          {<GlobalStyle />}
        </>
      ),
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
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
