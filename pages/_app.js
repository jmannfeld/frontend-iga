import React from "react";

import '../styles/global.css';
import Layout from "../components/Layout";

const App = ({Component, props}) => (
  <Layout>
    <Component {...props}/>
  </Layout>
);

export default App;