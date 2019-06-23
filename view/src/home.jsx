import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Cal from './components/calendar';
import Navtop from './components/navbar';
import TabsForForms from './components/tabs';
import Footer from './components/footer';

const Home = () => {
  const [events, setEvents] = useState('/jsonevent');
  return (
    <>
      <Navtop />
      <Cal events={events} />
      <Container>
        <TabsForForms setEvents={setEvents} />
      </Container>
      <Footer />
    </>
  );
};
export default Home;
