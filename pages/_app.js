import React from 'react';
import App from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss';

import Layout from '../components/Layout';
import {Provider} from "../components/Utils/Context";

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default MyApp;
