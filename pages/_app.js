import React from "react";
import App, { Container } from "next/app";
import "../styles/index.css";
import "../styles/style.scss";
import { Provider } from "react-redux";
import store from "../redux/store";
import { withRouter } from "next/router";
import withRedux from "next-redux-wrapper";


class MyApp extends App {
  static async getInitialProps({ res, Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { ...pageProps };
  }

  render() {
    const { Component, store, pageProps = {} } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
export default withRouter(withRedux(store)(MyApp));
