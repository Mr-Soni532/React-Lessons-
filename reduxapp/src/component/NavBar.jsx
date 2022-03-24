import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
const NavBar = () => {
  const amount = useSelector(state => state.amount)
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Local Bank</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse> 
          <Button>Balance: {amount}</Button>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar