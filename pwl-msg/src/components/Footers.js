import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footers() {
    const footerStyle = {
        backgroundColor: 'cyan', 
        color: 'white', 
    };

    return (
        <footer className="footer text-light fixed-bottom" style={footerStyle}>
            <Container>
                <Row className="justify-content-center align-items-end">
                    <Col className="text-center">
                        <span className="copyright">2024 &copy;</span>
                        <span className="brand">IBI Kesatuan Bogor</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
