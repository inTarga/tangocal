import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import AddForm from './addform';
import 'whatwg-fetch';

const TabsForForms = () => (
  <Tabs defaultActiveKey="add">
    <Tab eventKey="add" title="Legg til">
      <AddForm />
    </Tab>
    <Tab eventKey="filter" title="Filtrer" disabled>
      <h1>something</h1>
    </Tab>
    <Tab eventKey="admin" title="Admin">
      <Button variant="primary" onClick={() => fetch('/reset', { method: 'POST' })}>
        Tilbakestill kalender
      </Button>
      <Button variant="primary" onClick={() => fetch('/placeholder', { method: 'POST' })}>
        Legg til hendelser
      </Button>
    </Tab>
  </Tabs>
);
export default TabsForForms;
