import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { configureStore } from "@store/configureStore";
import AppLayout from "@containers/templates/AppLayout";
import axios from "axios";

type Props = {
  Component: React.Component;
  store: any;
};

class CarrotMarket extends App<Props> {
  static getInitialProps = async ({ Component, ctx }) => {
    const {
      isServer,
      req: {
        headers: { cookie },
      },
    } = ctx;
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    if (isServer && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }

    return { pageProps };
  };

  render() {
    const { store, Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    );
  }
}

export default withRedux(configureStore())(withReduxSaga(CarrotMarket));
