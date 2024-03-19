import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function Headers() {
    return (
        <Navbar bg="" expand="lg">
            <Navbar.Brand href="#home">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png" alt="IBIK Logo" className="me-2" width="40" height="40" />
                <span style={{ fontWeight: 'bold' }}>IBI Kesatuan</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav nav-pills ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">PWL</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}