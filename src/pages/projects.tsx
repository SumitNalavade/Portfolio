import React from 'react';

import Container from "react-bootstrap/Container"

import Layout from '../components/Layout/Layout';
import Navbar from "../components/Navbar/Navbar";


const Projects: React.FC = () => {
    return (
        <Container fluid className="p-0">
            <Navbar />

            <Layout>
            
            </Layout>
        </Container>
    );
};

export default Projects;