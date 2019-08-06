import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { configureStore } from "../store/configureStore";
import AppLayout from "../components/templates/AppLayout";

type Props = {
  Component: React.Component;
  store: any;
};

class CarrotMarket extends App<Props> {
  static getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  };

  render() {
    const { store, Component, pageProps } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore())(CarrotMarket);
