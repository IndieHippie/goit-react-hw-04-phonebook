import React from 'react';
import { Form, Input, Button } from 'components/ContactForn/ContactForm.module';

import { nanoid } from 'nanoid';

const INITIAL_STATE = {
    name: '',
    number: ''
  };


class ContactForm extends React.Component {
  state = {...INITIAL_STATE}

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({...INITIAL_STATE})
  }

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    this.props.onSubmit({ ...this.state, id });
    this.reset()
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label >
            <span>Name</span>
          </label>
          <Input              
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
}

export default ContactForm;
