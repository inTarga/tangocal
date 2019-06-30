import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import LocalizedStrings from 'react-localization';
import useFormFilter from './useFormFilter';

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
    console.log(types);
    console.log(groups);
    let url = '/jsonfilter?type=';
    for (const type in types) {
      console.log(type);
      url += type;
      url += ',';
    }
    url += '&group=';
    for (const group in groups) {
      console.log(group);
      url += group;
      url += ',';
    }
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(json => props.setEvents(json));
  }

  const {
    groups, types, handleChange, handleSubmit,
  } = useFormFilter(login);
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
          value="type"
        />
        <Form.Check
          inline
          name="practica"
          label={strings.typePractica}
          onChange={handleChange}
          value="type"
        />
        <Form.Check
          inline
          name="milonga"
          label={strings.typeMilonga}
          onChange={handleChange}
          value="type"
        />
        <Form.Check
          inline
          name="workshop"
          label={strings.typeWorkshop}
          onChange={handleChange}
          value="type"
        />
        <Form.Check
          inline
          name="festival"
          label={strings.typeFestival}
          onChange={handleChange}
          value="type"
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
          value="group"
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
