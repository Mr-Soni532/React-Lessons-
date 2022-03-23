import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function NavBar() {
    const navigate = useNavigate();
    const logout = (e) => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">iNotebook</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between '>
                        <Nav className="">
                            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                            <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                        </Nav>
                        {!localStorage.getItem('token') ? <Nav>
                            <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
                            <LinkContainer to="/signup"><Nav.Link>Signup</Nav.Link></LinkContainer>
                        </Nav> : <Button variant='light'  onClick={logout}>Logout</Button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
