import React from "react";
import Cal from "./components/calendar";
import { Navtop } from "./components/navbar";
import { Container } from "react-bootstrap";

export const Home = () => (
  <>
    <Navtop />
    <Container>
      <Cal />
    </Container>
  </>
);
