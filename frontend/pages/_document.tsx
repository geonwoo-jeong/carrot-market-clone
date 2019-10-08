import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyle from "../globalStyles";
import Helmet, { HelmetData } from "react-helmet";

type Props = {
  pageProps: any;
  helmet: HelmetData;
};

class MyDocument extends Document<Props> {
  static getInitialProps = async (ctx: DocumentContext): Promise<any> => {
    const originalRenderPage = ctx.renderPage;
    const sheet = new ServerStyleSheet();
    const initialProps = await Document.getInitialProps(ctx);
    const styleTags = sheet.getStyleElement();
    const helmet = Helmet.renderStatic();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    return {
      ...initialProps,
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
