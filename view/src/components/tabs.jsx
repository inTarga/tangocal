import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import LocalizedStrings from 'react-localization';
import AddForm from './addform';
import 'whatwg-fetch';

const strings = new LocalizedStrings({
  nb: {
    reset: 'Tilbakestill kalender',
    addPlaceholder: 'Legg til hendelser',
    addTab: 'Legg til',
    filterTab: 'Filtrer',
    adminTab: 'Admin',
  },
  en: {
    reset: 'Reset calendar',
    addPlaceholder: 'Add event',
    addTab: 'Add',
    filterTab: 'Filter',
    adminTab: 'Admin',
  },
});

const TabsForForms = (props) => {
  const { setEvents, locale } = props;
  strings.setLanguage(locale);
  return (
    <Tabs defaultActiveKey="add">
      <Tab eventKey="add" title={strings.addTab}>
        <AddForm setEvents={setEvents} locale={locale} />
      </Tab>
      <Tab eventKey="filter" title={strings.filterTab} disabled>
        <h1>something</h1>
      </Tab>
      <Tab eventKey="admin" title={strings.adminTab}>
        <Button
          className="m-1"
          variant="primary"
          onClick={() => fetch('/reset', { method: 'POST' }).then(() => props.setEvents([]))
          }
        >
          {strings.reset}
        </Button>
        <Button
          className="m-1"
          variant="primary"
          onClick={() => fetch('/placeholder', { method: 'POST' }).then(() => fetch('/jsonevent')
            .then(response => response.json())
            .then(json => props.setEvents(json)))
          }
        >
          {strings.addPlaceholder}
        </Button>
      </Tab>
    </Tabs>
  );
};
TabsForForms.propTypes = {
  setEvents: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};
export default TabsForForms;
