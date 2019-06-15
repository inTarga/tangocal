import React from 'react';
import {
  Nav, Navbar,
} from 'react-bootstrap';

const Navtop = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">TangoKalender</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
  </Navbar>
);
export default Navtop;
