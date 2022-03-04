import React, { Component } from "react";
import DropdownBtn from "./DropdownBtn";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">News@Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{width: "50%", alignItems: "center"}}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <DropdownBtn type="Category" />
            </Nav>
            <Nav style={{width: "50%", justifyContent: "flex-end"}}>
              <DropdownBtn type="Country" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
