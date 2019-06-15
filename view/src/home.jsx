import React from 'react';
import { Container } from 'react-bootstrap';
import Cal from './components/calendar';
import Navtop from './components/navbar';
import TabsForForms from './components/tabs';

const Home = () => (
  <>
    <Navtop />
    <Cal />
    <Container>
      <TabsForForms />
    </Container>
  </>
);
export default Home;
