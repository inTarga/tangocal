import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Cal from './components/calendar';
import Navtop from './components/navbar';
import TabsForForms from './components/tabs';
import Footer from './components/footer';

const Home = () => {
  const [events, setEvents] = useState('/jsonevent');
  const [locale, setLocale] = useState('nb');
  return (
    <>
      <Navtop locale={locale} setLocale={setLocale} />
      <Cal events={events} locale={locale} />
      <Container>
        <TabsForForms setEvents={setEvents} locale={locale} />
      </Container>
      <Footer />
    </>
  );
};
export default Home;
