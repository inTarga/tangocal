import React from 'react';
import { Form } from 'react-bootstrap';

const AddForm = () => (
  <Form>
    <Form.Row>
      <Form.Group controlId="formBasicTitle">
        <Form.Control type="title" placeholder="Event name" />
      </Form.Group>
      <Form.Group controlId="formBasicLink">
        <Form.Control type="link" placeholder="link to your page" />
      </Form.Group>
    </Form.Row>
    <Form.Group controlId="formBasicDate">
      <Form.Control type="start" placeholder="Start date/time" />
    </Form.Group>
  </Form>
);
export default AddForm;
