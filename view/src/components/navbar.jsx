import React from "react";
import { Nav, Navbar, Button, Form } from "react-bootstrap";

export const Navtop = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">TangoKalender</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
  </Navbar>
);
