import Layout from "../components/Layout";
import React from "react";

const Committees = () => (
  <Layout>
    <div className="container-fluid content h-100">
      <h1>Committees Homepage (List view)</h1>
    </div>

    <style jsx>{`
      .content {
        background-color: white;
      }
    `}</style>
  </Layout>
);

export default Committees;