import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Desun Assignment</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/cart'>
                            <Nav.Link href="#cart">Cart</Nav.Link>
                        </Link>
                        <NavDropdown title="Login/Signup" id="collasible-nav-dropdown">
                            <Link to="/login">
                                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                            </Link>
                            <Link to="/register">
                                <NavDropdown.Item href="#action/3.2">
                                    Signup
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link to="/cart">
                            <Nav.Link href="#cart">Cart</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
