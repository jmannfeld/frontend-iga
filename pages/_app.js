import React from 'react';

import '../styles/global.css';

import Layout from '../components/Layout';

import * as standing_committees from '../data/standing_committees.json';
import * as interim_committees from '../data/interim_committees.json';

const App = ({ Component, pageProps }) => (
  <Layout
    standing_committees={standing_committees}
    interim_committees={interim_committees}
  >
    <Component {...pageProps} />
  </Layout>
);

export async function getStaticProps() {
  const standing_committees_response = JSON.parse(
    JSON.stringify(standing_committees)
  );
  const interim_committees_response = JSON.parse(
    JSON.stringify(interim_committees)
  );
  this.standing_committees = standing_committees_response.default;
  return {
    props: {
      standing_committees: standing_committees_response.default,
      interim_committees: interim_committees_response.default,
    },
  };
}

export default App;
