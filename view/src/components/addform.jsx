import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddForm = () => (
  <Form>
    <Form.Row className="p-1">
      <Form.Group as={Form.Col} className="p-1" controlId="formBasicTitle">
        <Form.Label>Tittel</Form.Label>
        <Form.Control type="title" placeholder="Min hendelse" />
      </Form.Group>
      <Form.Group as={Form.Col} className="p-1" controlId="formBasicLink">
        <Form.Label>Lenke</Form.Label>
        <Form.Control type="link" placeholder="hendelse.no/minhendelse" />
      </Form.Group>
      <Form.Group as={Form.Col} className="p-1" controlId="formBasicStart">
        <Form.Label>Startdato/tid</Form.Label>
        <Form.Control type="start" placeholder="YYMMDD:hhmmss" />
      </Form.Group>
      <Form.Group as={Form.Col} className="p-1" controlId="formBasicEnd">
        <Form.Label>Startdato/tid</Form.Label>
        <Form.Control type="end" placeholder="YYMMDD:hhmmss" />
      </Form.Group>
      <Form.Group as={Form.Col} className="p-1" controlId="formBasicType">
        <Form.Label>Type</Form.Label>
        <Form.Control as="select" type="type" placeholder="Type">
          <option>Klasse</option>
          <option>Practica</option>
          <option>Milonga</option>
          <option>Workshop</option>
          <option>Festival</option>
        </Form.Control>
      </Form.Group>
    </Form.Row>
    <Form.Group className="p-1" controlId="formBasicText">
      <Form.Label>Beskrivelse</Form.Label>
      <Form.Control
        as="textarea"
        rows="3"
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </Form.Group>
    <Button className="p-1">Sende inn</Button>
  </Form>
);
export default AddForm;
