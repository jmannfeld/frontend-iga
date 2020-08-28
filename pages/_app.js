import React from "react";

import '../styles/global.css';
import Layout from "../components/Layout";

const App = ({Component, pageProps}) => (
  <Layout>
    <Component {...pageProps}/>
  </Layout>
);

export default App;