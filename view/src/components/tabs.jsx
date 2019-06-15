import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import AddForm from './addform';

const TabsForForms = () => (
  <Tabs defaultActiveKey="add">
    <Tab eventKey="add" title="Add">
      <AddForm />
    </Tab>
    <Tab eventKey="filter" title="Filter" disabled>
      <h1>something</h1>
    </Tab>
  </Tabs>
);
export default TabsForForms;
