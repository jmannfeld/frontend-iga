import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Navigator from "../../components/Committees/Navigator";

const Committees = () => (
  <>
    <Head>
      <title>Committees</title>
    </Head>
    <div className="container-fluid content h-100 py-3">
      <div className="row h-100">
        <div className="col-2">
          <Navigator/>
        </div>
        <div className="col-10">
          <h1>Committees Homepage Index (List view)</h1>
        </div>
      </div>
    </div>

    <style jsx>{`
      .content {
        background-color: white;
      }
    `}</style>
  </>
);

export default Committees;