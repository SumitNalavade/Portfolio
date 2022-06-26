import React from 'react';
import { Link } from "gatsby";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const MainNav: React.FC = () => {
    return (
        <Navbar bg="highlight" >
            <Container fluid className="d-flex justify-content-between align-items-center">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/" className="mx-2 text-main text-decoration-none">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/projects" className="mx-2 text-main text-decoration-none">Projects</Link></Nav.Link>
                        <Nav.Link><Link to="/about" className="mx-2 text-main text-decoration-none">About</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link className="mx-2 text-main display-8" href="https://github.com/SumitNalavade" target="_blank"><AiOutlineGithub /></Nav.Link>
                    <Nav.Link className="mx-2 text-main display-8" href="https://www.instagram.com/sumit.nalavade24/" target="_blank" ><AiOutlineInstagram /></Nav.Link>
                    <Nav.Link className="mx-2 text-main display-8" href="vs.nalavade2003@gmail.com" target="_blank"><AiOutlineMail /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default MainNav;