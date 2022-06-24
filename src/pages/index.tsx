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
      <Container fluid className="p-sm-5">
        <Row >
        <Col lg={6} className="p-sm-5 order-lg-2" >
            <StaticImage src="../images/sumit.png" alt="Picture of myself" className='border border-5 rounded-circle border-highlight' />
          </Col>

          <Col lg={6} className="p-sm-5 order-lg-1" >
            <Card bg="cardBackground" className="h-100 rounded" >
              <Card.Body className="text-center d-flex flex-column justify-content-around text-main">
                <div>
                  <Card.Title className="display-1">Sumit Nalavade</Card.Title>
                  <Card.Text  className="display-5">Full-Stack Developer</Card.Text>
                  <Card.Text  className="display-6">Texas A&M Engineering '26</Card.Text>
                </div>

                <div>
                  <Link className='text-main' to="/404"><Button type="button" className="btn btn-large btn-tertiary text-main w-50 py-3">Check out my work!</Button></Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};

const homeStyles = {
  selfImage: {
    border: "20px solid #7f5af0",
    borderRadius: "50%",
  }
}

export default Index;