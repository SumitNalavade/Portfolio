import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Container fluid style={layoutStyles.topContainer}>
            {children}
        </Container>
    )
};

const layoutStyles = {
    topContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#242629",
        width: "100%",
        height: "100vh",
        overflow: "hidden"
    }
}


export default Layout;