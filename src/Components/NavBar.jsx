import React from 'react'
import { Navbar, Nav, Container, Form, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function NavBar() {
    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
            <Container>
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <Navbar.Brand href='#' className="brand-text" style={{ cursor: 'pointer' }}> GlobalConnect</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-collapse" />

                    <Navbar.Collapse id="navbar-collapse" className="w-100">
                        <div className="d-lg-flex w-100 justify-content-between align-items-center flex-column flex-lg-row">
                            <Nav className="mx-auto nav-links text-center text-lg-start">
                                <Nav.Link href='#' end>Home</Nav.Link>
                                <Nav.Link href='/#AboutPage'>About</Nav.Link>

                                <Nav.Link href='/#ServicePages'>Service</Nav.Link>
                                <Nav.Link href='/#SuccesStories'>Success</Nav.Link>
                                <Nav.Link href='/#WhtChoose'>Our Works</Nav.Link>

                                {/* <NavDropdown title="Services" id="services-dropdown">
                                    <NavDropdown.Item to="/services/design">Design</NavDropdown.Item>
                                    <NavDropdown.Item to="/services/marketing">Marketing</NavDropdown.Item>
                                    <NavDropdown.Item to="/services/development">Development</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>

                            <Form.Select
                                size="sm"
                                className="ms-lg-3 mt-2 mt-lg-0"
                                style={{ width: '150px' }}
                            >
                                <option value="en">🌐 English</option>
                                <option value="hi">🇮🇳 Hindi</option>
                                <option value="fr">🇫🇷 French</option>
                                <option value="es">🇪🇸 Spanish</option>
                            </Form.Select>
                        </div>
                    </Navbar.Collapse>

                </div>
            </Container>
        </Navbar>

    )
}
