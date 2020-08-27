import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

const Committees = () => (
  <Layout>
    <Head>
      <title>Committees</title>
    </Head>
    <div className="container-fluid content h-100">
      <h1>Committees Homepage Index (List view)</h1>
    </div>

    <style jsx>{`
      .content {
        background-color: white;
      }
    `}</style>
  </Layout>
);

export default Committees;