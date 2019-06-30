import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import LocalizedStrings from 'react-localization';
import useForm from './useForm';

const strings = new LocalizedStrings({
  nb: {
    typeLabel: 'Type',
    typeClass: 'Klasse',
    typePractica: 'Practica',
    typeMilonga: 'Milonga',
    typeWorkshop: 'Workshop',
    typeFestival: 'Festival',
    groupLabel: 'Gruppe',
    filter: 'Filtrer',
  },
  en: {
    typeLabel: 'Type',
    typeClass: 'Class',
    typePractica: 'Practica',
    typeMilonga: 'Milonga',
    typeWorkshop: 'Workshop',
    typeFestival: 'Festival',
    groupLabel: 'Group',
    filter: 'Filter',
  },
});

const FilterForm = (props) => {
  function login() {
    console.log(values);
    /*
    fetch('/addevent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(() => fetch('/jsonevent')
      .then(response => response.json())
      .then(json => props.setEvents(json)));
    */
  }

  const { values, handleChange, handleSubmit } = useForm(login);
  const { locale } = props;
  strings.setLanguage(locale);
  return (
    <Form className="p-1" onSubmit={handleSubmit}>
      <div className="p-1">
        <div>
          <strong>{strings.typeLabel}</strong>
        </div>
        <Form.Check
          inline
          name="class"
          label={strings.typeClass}
          onChange={handleChange}
          value={values.class}
        />
        <Form.Check
          inline
          name="practica"
          label={strings.typePractica}
          onChange={handleChange}
          value={values.practica}
        />
        <Form.Check
          inline
          name="milonga"
          label={strings.typeMilonga}
          onChange={handleChange}
          value={values.milonga}
        />
        <Form.Check
          inline
          name="workshop"
          label={strings.typeWorkshop}
          onChange={handleChange}
          value={values.workshop}
        />
        <Form.Check
          inline
          name="festival"
          label={strings.typeFestival}
          onChange={handleChange}
          value={values.festival}
        />
      </div>
      <div className="p-1">
        <div>
          <strong>{strings.groupLabel}</strong>
        </div>
        <Form.Check
          inline
          name="otq"
          label="Oslo Tango Queer"
          onChange={handleChange}
          value={values.otq}
        />
      </div>
      <Button className="m-1 btn-block" type="submit">
        {strings.filter}
      </Button>
    </Form>
  );
};
FilterForm.propTypes = {
  setEvents: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};
export default FilterForm;
