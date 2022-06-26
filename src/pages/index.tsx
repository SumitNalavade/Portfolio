import React from "react";

import Container from "react-bootstrap/Container";

import Layout from "../components/Layout";
import Intro from "../components/Intro";

const Index: React.FC = () => {
  return (
    <Layout>
      <Container fluid className="p-sm-5 d-flex justify-content-center align-items-center h-100">
        <Intro />
      </Container>
    </Layout>
  )
};

export default Index;