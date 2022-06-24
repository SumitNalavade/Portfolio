import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from '../components/Layout/Layout';
import Navbar from "../components/Navbar/Navbar";

const Projects: React.FC = () => {
    return (
        <Container fluid className="p-0">
            <Navbar />

            <Layout>
                <Container className="d-flex flex-column justify-content-around h-100 text-main">
                    <Container>
                        <Row className="d-flex align-items-center justify-content-around">
                            <Col lg={6}>
                            <u className="text-tertiary"><h4 className='display-4 text-main'>About Me</h4></u>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, cumque? Perferendis aliquid odit facere, tempore doloremque vero corporis eius dolorum similique praesentium! Veritatis, voluptatem? Facilis corporis similique neque ipsam sed.
                            Voluptate dicta hic ea amet vero eum eius suscipit totam maiores? Aperiam, ipsum quaerat autem quibusdam eum explicabo, distinctio reiciendis dolor recusandae perspiciatis minus, aliquid temporibus! Odio vero ducimus possimus?
                            Tempore eius porro odit voluptatibus architecto minima sapiente non itaque, veniam iusto unde delectus fugiat laudantium veritatis animi eligendi odio commodi, voluptates asperiores! Debitis magnam ipsum mollitia quae. Aperiam, quos!</p>
                            </Col>

                            <Col lg={6} className="d-flex justify-content-center">
                            <StaticImage src="../images/sumit-rounded.png" alt="Picture of myself" className='border border-4 rounded-circle rounded-4 border-tertiary' style={{maxWidth: "450px"}} />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Layout>
        </Container>
    );
};

export default Projects;