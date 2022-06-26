import React from 'react';
import { Link } from "gatsby";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

const MainNav: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="highlight" variant="dark">
            <Container fluid className="px-4">
        <Navbar.Brand><Link to="/" className="text-main text-decoration-none">SN</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/projects" className="text-main text-decoration-none">Projects</Link></Nav.Link>
            <Nav.Link><Link to="/about" className="text-main text-decoration-none">About</Link></Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link className="mx-2 text-main display-8 in-line" href="https://github.com/SumitNalavade" target="_blank"><AiOutlineGithub /></Nav.Link>
            <Nav.Link className="mx-2 text-main display-8" href="https://www.instagram.com/sumit.nalavade24/" target="_blank" ><AiOutlineInstagram /></Nav.Link>
            <Nav.Link className="mx-2 text-main display-8" href="vs.nalavade2003@gmail.com" target="_blank"><AiOutlineMail /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
};

export default MainNav;