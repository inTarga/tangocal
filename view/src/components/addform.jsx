import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import LocalizedStrings from 'react-localization';
import useFormAdd from './useFormAdd';

const strings = new LocalizedStrings({
  nb: {
    titleLabel: 'Tittel',
    titlePlaceholder: 'Min Hendelse',
    linkLabel: 'Lenke',
    linkPlaceholder: 'hendelse.no/minhendelse',
    startLabel: 'Startdato/tid',
    startPlaceholder: 'YYYY-MM-DDThh:mm:ss',
    endLabel: 'Sluttdato/tid',
    endPlaceholder: 'YYYY-MM-DDThh:mm:ss',
    typeLabel: 'Type',
    typeClass: 'Klasse',
    typePractica: 'Practica',
    typeMilonga: 'Milonga',
    typeWorkshop: 'Workshop',
    typeFestival: 'Festival',
    descriptionLabel: 'Beskrivelse',
    descriptionPlaceholder:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    submit: 'Send inn',
  },
  en: {
    titleLabel: 'Title',
    titlePlaceholder: 'My Event',
    linkLabel: 'Link',
    linkPlaceholder: 'event.no/myevent',
    startLabel: 'Start date/time',
    startPlaceholder: 'YYYY-MM-DDThh:mm:ss',
    endLabel: 'End date/time',
    endPlaceholder: 'YYYY-MM-DDThh:mm:ss',
    typeLabel: 'Type',
    typeClass: 'Class',
    typePractica: 'Practica',
    typeMilonga: 'Milonga',
    typeWorkshop: 'Workshop',
    typeFestival: 'Festival',
    descriptionLabel: 'Description',
    descriptionPlaceholder:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    submit: 'Submit',
  },
});

const AddForm = (props) => {
  function login() {
    console.log(values);
    if (values.type === 'Klasse' || !values.hasOwnProperty('type')) {
      values.type = 'Class';
    }
    values.textColor = '#f8f8f0';
    if (values.type === 'Class') {
      values.backgroundColor = '#5cb85c';
      values.borderColor = '#5cb85c';
    } else if (values.type === 'Practica') {
      values.backgroundColor = '#f0ad4e';
      values.borderColor = '#f0ad4e';
    } else if (values.type === 'Milonga') {
      values.backgroundColor = '#d9534f';
      values.borderColor = '#d9534f';
    } else if (values.type === 'Workshop') {
      values.backgroundColor = '#5cb85c';
      values.borderColor = '#5cb85c';
    } else if (values.type === 'Festival') {
      values.backgroundColor = '#5bc0de';
      values.borderColor = '#5bc0de';
    }
    console.log(values);
    fetch('/addevent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(() => fetch('/jsonevent')
      .then(response => response.json())
      .then(json => props.setEvents(json)));
  }

  const { values, handleChange, handleSubmit } = useFormAdd(login);
  const { locale } = props;
  strings.setLanguage(locale);
  return (
    <Form className="p-1" onSubmit={handleSubmit}>
      <Form.Row className="p-1">
        <Form.Group as={Form.Col} className="p-1" controlId="formBasicTitle">
          <Form.Label>{strings.titleLabel}</Form.Label>
          <Form.Control
            name="title"
            placeholder={strings.titlePlaceholder}
            onChange={handleChange}
            value={values.title}
          />
        </Form.Group>
        <Form.Group as={Form.Col} className="p-1" controlId="formBasicLink">
          <Form.Label>{strings.linkLabel}</Form.Label>
          <Form.Control
            name="url"
            placeholder={strings.linkPlaceholder}
            onChange={handleChange}
            value={values.link}
          />
        </Form.Group>
        <Form.Group as={Form.Col} className="p-1" controlId="formBasicStart">
          <Form.Label>{strings.startLabel}</Form.Label>
          <Form.Control
            name="start"
            placeholder={strings.startPlaceholder}
            onChange={handleChange}
            value={values.start}
          />
        </Form.Group>
        <Form.Group as={Form.Col} className="p-1" controlId="formBasicEnd">
          <Form.Label>{strings.endLabel}</Form.Label>
          <Form.Control
            name="end"
            placeholder={strings.endPlaceholder}
            onChange={handleChange}
            value={values.end}
          />
        </Form.Group>
        <Form.Group as={Form.Col} className="p-1" controlId="formBasicType">
          <Form.Label>{strings.typeLabel}</Form.Label>
          <Form.Control
            as="select"
            name="type"
            onChange={handleChange}
            value={values.type}
          >
            <option>{strings.typeClass}</option>
            <option>{strings.typePractica}</option>
            <option>{strings.typeMilonga}</option>
            <option>{strings.typeWorkshop}</option>
            <option>{strings.typeFestival}</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Group className="p-1" controlId="formBasicText">
        <Form.Label>{strings.descriptionLabel}</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          rows="4"
          placeholder={strings.descriptionPlaceholder}
          onChange={handleChange}
          value={values.description}
        />
      </Form.Group>
      <Button className="m-1 btn-block" type="submit">
        {strings.submit}
      </Button>
    </Form>
  );
};
AddForm.propTypes = {
  setEvents: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};
export default AddForm;
