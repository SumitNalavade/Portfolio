import React from 'react'

import Container from "react-bootstrap/Container";

import Layout from '../components/Layout'
import Navbar from "../components/Navbar";
import Info from "../components/Info";

const About: React.FC = () => {
    return (
        <Layout>
                <Navbar />
                <Container className="d-flex flex-column justify-content-around h-100 text-main">
                    <Info />
                </Container>
        </Layout>    
    )
};

export default About;