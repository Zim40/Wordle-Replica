import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function HeaderNavbar() {
  return (
    <Navbar expand="lg" className="body-tertiary nav">
      <Container className="nav-Container" fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav"
            style={{ maxWidth: "100px" }}
            navbarScroll
          >
            <div className="nav--links">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Statistics</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
