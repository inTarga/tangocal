import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, Button } from 'react-bootstrap';
import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
  nb: {
    title: 'TangoKalender',
    home: 'Hjem',
    about: 'Om oss',
    groups: 'Grupper',
    changeloc: 'English',
  },
  en: {
    title: 'TangoCalendar',
    home: 'Home',
    about: 'About us',
    groups: 'Groups',
    changeloc: 'Norsk',
  },
});

const Navtop = (props) => {
  const { locale, setLocale } = props;
  strings.setLanguage(locale);
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">{strings.title}</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">{strings.home}</Nav.Link>
        <Nav.Link href="#about">{strings.about}</Nav.Link>
        <Nav.Link href="#groups">{strings.groups}</Nav.Link>
      </Nav>
      <Button
        className="p-1"
        onClick={() => setLocale(locale === 'nb' ? 'en' : 'nb')}
      >
        {strings.changeloc}
      </Button>
    </Navbar>
  );
};
Navtop.propTypes = {
  locale: PropTypes.string.isRequired,
  setLocale: PropTypes.func.isRequired,
};
export default Navtop;
