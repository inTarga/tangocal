import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useForm from './useForm';

const AddForm = () => {
  function login() {
    // console.log(values);
    fetch('/addevent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  }

  const { values, handleChange, handleSubmit } = useForm(login);

  return (
    <Form className="p-1" onSubmit={handleSubmit}>
      <Form.Row className="p-1">
        <Form.Group as={Form.Col} className="p-1" controlId="formBasicTitle">
          <Form.Label>Tittel</Form.Label>
          <Form.Control
            name="title"
            placeholder="Min hendelse"
            onChange={handleChange}
            value={values.title}
          />
        </Form.Group>
        <Form.Group as={Form.Col} className="p-1" controlId="formBasicLink">
          <Form.Label>Lenke</Form.Label>
          <Form.Control
            name="link"
            placeholder="hendelse.no/minhendelse"
            onChange={handleChange}
            value={values.link}
          />
        </Form.Group>
        <Form.Group as={Form.Col} className="p-1" controlId="formBasicStart">
          <Form.Label>Startdato/tid</Form.Label>
          <Form.Control
            name="start"
            placeholder="YYYY-MM-DDThh:mm:ss"
            onChange={handleChange}
            value={values.start}
          />
        </Form.Group>
        <Form.Group as={Form.Col} className="p-1" controlId="formBasicEnd">
          <Form.Label>Startdato/tid</Form.Label>
          <Form.Control
            name="end"
            placeholder="YYYY-MM-DDThh:mm:ss"
            onChange={handleChange}
            value={values.end}
          />
        </Form.Group>
        <Form.Group as={Form.Col} className="p-1" controlId="formBasicType">
          <Form.Label>Type</Form.Label>
          <Form.Control
            as="select"
            name="type"
            placeholder="Type"
            onChange={handleChange}
            value={values.type}
          >
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
          name="description"
          rows="4"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          onChange={handleChange}
          value={values.description}
        />
      </Form.Group>
      <Button className="p-1" type="submit" onClick={() => window.location.reload()}>
        Sende inn
      </Button>
    </Form>
  );
};
export default AddForm;
