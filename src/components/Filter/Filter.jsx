import React from 'react';
import PropTypes from 'prop-types';
import { Label, Section, Input } from './Filter.module';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <Section>
      <Label>Find contacts by Name</Label>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChangeFilter}
        value={filter}
        required
      />
    </Section>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
