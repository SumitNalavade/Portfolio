import React from 'react';
import Layout from '../components/Layout';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { AiOutlineGithub } from 'react-icons/ai';

import Navbar from "../components/Navbar";

const Projects: React.FC = () => {
    return (
        <Container fluid className="p-0">
            <Navbar />

            <Layout>
                
                <Container className="d-flex flex-column justify-content-evenly h-100 text-main">
                        <u className="text-tertiary"><h4 className='display-4 text-main d-flex justify-content-center'>Projects</h4></u>
                        <Container fluid>
                            <Row>
                                <Col md={4}>
                                    <Card className="text-background">
                                        <Container fluid className="card-block">
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Subtitle>Card Subtitle</Card.Subtitle>
                                            <Card.Text>Some quick example text to build on the card title .</Card.Text>
                                            <Card.Link><AiOutlineGithub /></Card.Link>
                                        </Container>
                                    </Card>
                                </Col>

                                <Col md={4}>
                                    <Card className="text-background">
                                        <Container fluid className="card-block">
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Subtitle>Card Subtitle</Card.Subtitle>
                                            <Card.Text>Some quick example text to build on the card title .</Card.Text>
                                            <Card.Link><AiOutlineGithub /></Card.Link>
                                        </Container>
                                    </Card>
                                </Col>

                                <Col md={4}>
                                    <Card className="text-background">
                                        <Container fluid className="card-block">
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Subtitle>Card Subtitle</Card.Subtitle>
                                            <Card.Text>Some quick example text to build on the card title .</Card.Text>
                                            <Card.Link><AiOutlineGithub /></Card.Link>
                                        </Container>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                
            </Layout>
            </Container>
    )
};

export default Projects;