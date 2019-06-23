import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AddForm from './addform';
import 'whatwg-fetch';

const TabsForForms = props => (
  <Tabs defaultActiveKey="add">
    <Tab eventKey="add" title="Legg til">
      <AddForm />
    </Tab>
    <Tab eventKey="filter" title="Filtrer" disabled>
      <h1>something</h1>
    </Tab>
    <Tab eventKey="admin" title="Admin">
      <Button
        className="m-1"
        variant="primary"
        onClick={() => fetch('/reset', { method: 'POST' }).then(() => props.setEvents([]))
        }
      >
        Tilbakestill kalender
      </Button>
      <Button
        className="m-1"
        variant="primary"
        onClick={() => fetch('/placeholder', { method: 'POST' }).then(() => fetch('/jsonevent')
          .then(response => response.json())
          .then(json => props.setEvents(json)))
        }
      >
        Legg til hendelser
      </Button>
    </Tab>
  </Tabs>
);
TabsForForms.propTypes = {
  setEvents: PropTypes.func.isRequired,
};
export default TabsForForms;
