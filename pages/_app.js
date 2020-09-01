import React from 'react';
import App from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss';

import Layout from '../components/Layout';
import {Provider} from "../components/Utils/Context";
import * as committeesList from "../data/committees";

class MyApp extends App {
  constructor(props) {
    super(props);

    const response = JSON.parse(JSON.stringify(committeesList)); // this is where we would have the API call, e.g. await fetch(...)
    this.state = {
      senate_standing_committees: response.default.committees.filter(
        committee => committee.type === "standing" && committee.chamber === "senate"
      ),
      house_standing_committees: response.default.committees.filter(
        committee => committee.type === "standing" && committee.chamber === "house"
      ),
      interim_committees: response.default.committees.filter(committee => committee.type === "interim"),
      conference_committees: response.default.committees.filter(committee => committee.type === "conference")
    };
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <Provider state={this.state}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default MyApp;
