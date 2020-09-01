import Head from 'next/head';
import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <div className="layout">
    <Head>
      <title>Indiana General Assembly, 2020 Session</title>
      <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;600&family=Roboto&display=swap" rel="stylesheet" />
    </Head>

    <div className="layout-border mx-5 d-flex flex-column justify-content-start align-items-stretch">
      <Header />
      {props.children}
      <Footer />
    </div>

    <style jsx>{`
      .layout {
        background-color: rgb(5, 24, 54);
        min-height: 100vh;
        min-width: 100vh;
      }
      .layout-border {
        border-right: 5px solid #ffd54a;
        border-left: 5px solid #ffd54a;
        min-height: 100vh;
      }
    `}</style>
  </div>
);

export default Layout;
