import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigaitonMenu({ title, mode, toggleMode }) {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className={`navbar navbar-expand-lg navbar-${mode.bgColor} bg-${mode.bgColor}`}
      >
        <Container fluid>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
            <Form>
                <Form.Check
                
                  className={`text-${mode.fontColor} fs-4`}
                  type="switch"
                  id="custom-switch"
                  label="Dark Mode"
                  onClick={toggleMode}
                />
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
