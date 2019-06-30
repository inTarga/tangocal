import { useState } from 'react';

const useFormFilter = (callback) => {
  const [types, setTypes] = useState({});
  const [groups, setGroups] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    if (event.target.value === 'type') {
      setTypes(values => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    } else {
      setGroups(values => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    }
  };

  return {
    handleChange,
    handleSubmit,
    types,
    groups,
  };
};

export default useFormFilter;
