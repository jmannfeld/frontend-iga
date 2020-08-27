import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <div className="container-fluid content h-100">
      <h1>Hello next.js</h1>
    </div>

    <style jsx>{`
      .content {
        background-color: white;
      }
    `}</style>
  </Layout>
);

export default Index;