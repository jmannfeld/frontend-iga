import Layout from "../components/Layout";
import React from "react";

const Index = () => (
  <Layout>
    <div className="container-fluid content h-100">
      <h1>Website Homepage</h1>
    </div>

    <style jsx>{`
      .content {
        background-color: white;
      }
    `}</style>
  </Layout>
);

export default Index;