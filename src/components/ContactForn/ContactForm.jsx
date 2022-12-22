import React from 'react';
import { Form, Input, Button } from 'components/ContactForn/ContactForm.module';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from 'react';

// const INITIAL_STATE = {
//     name: '',
//     number: ''
//   };

function ContactForm({ onSubmit }) {
  // const [state, setState] = useState({
  //   name: '',
  //   number: '',
  // });

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value)
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    onSubmit({ name, number, id });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
        </label>
        <Input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>
          <span>Number</span>
        </label>
        <Input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
}

export default ContactForm;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
