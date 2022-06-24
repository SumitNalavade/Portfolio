import React from 'react'

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

import Layout from "../components/Layout/Layout";
import "../components/Layout/custom.scss";

const Index: React.FC = () => {
  return (
    <Layout>
      <Container fluid className="p-sm-5 d-flex justify-content-center align-items-center h-100">
        <Row >
        <Col lg={6} className="p-5 order-lg-2 d-flex justify-content-center align-items-center" >
            <StaticImage src="../images/sumit-sketch.png" alt="Picture of myself" className='border border-10 rounded-circle border-highlight' style={{maxWidth: "500px"}} />
          </Col>

          <Col lg={6} className="order-lg-1 d-flex justify-content-center align-items-center" >
            <Card bg="cardBackground" className="h-100 rounded" >
              <Card.Body className="text-center d-flex flex-column justify-content-around text-main">
                <Container className="">
                  <Card.Title className="display-1 my-4">Sumit Nalavade</Card.Title>
                  <Card.Text  className="display-8 my-4">Full-Stack Developer</Card.Text>
                  <Card.Text  className="display-8 my-4">Texas A&M Engineering '26</Card.Text>
                </Container>

                <div className="">
                  <Link className='text-main' to="/about">
                    <Button type="button" className="btn btn-large btn-highlight text-main w-75 py-3">Check Out My Work!</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};

export default Index;