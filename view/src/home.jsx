import React from 'react';
import { Container } from 'react-bootstrap';
import Cal from './components/calendar';
import Navtop from './components/navbar';
import TabsForForms from './components/tabs';
import Footer from './components/footer';

const Home = () => (
  <>
    <Navtop />
    <Cal />
    <Container>
      <TabsForForms />
    </Container>
    <Footer />
  </>
);
export default Home;
