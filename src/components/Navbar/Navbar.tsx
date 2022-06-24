import React from 'react';

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

const MainNav: React.FC = () => {
    return (
        <Navbar bg="highlight" >
            <Container fluid className="d-flex justify-content-end">
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