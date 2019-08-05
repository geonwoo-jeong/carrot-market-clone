import Document, { Html, Head, Main, NextScript } from "next/document";
import { AppContext } from "../components/AppContext";
import { ServerStyleSheet } from "styled-components";
import GlobalStyle from "../globalStyles";
import Helmet, { HelmetData } from "react-helmet";

type Props = {
  pageProps: any;
  helmet: HelmetData;
};

class MyDocument extends Document<Props> {
  static getInitialProps = async (ctx: AppContext): Promise<any> => {
    const originalRenderPage = ctx.renderPage;
    const sheet = new ServerStyleSheet();
    const initialProps = await Document.getInitialProps(ctx);
    const pageProps = ctx.store.getState();
    const styleTags = sheet.getStyleElement();
    const helmet = Helmet.renderStatic();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    return {
      ...initialProps,
      pageProps,
      helmet,
      styles: (
        <>
          {styleTags}
          {<GlobalStyle />}
        </>
      ),
    };
  };

  render() {
    const {
      helmet: { htmlAttributes, bodyAttributes, ...helmet },
    } = this.props;
    return (
      <Html {...htmlAttributes}>
        <Head>{Object.values(helmet).map(el => el.toComponent())}</Head>
        <body {...bodyAttributes}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
