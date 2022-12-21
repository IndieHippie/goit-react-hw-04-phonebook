import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, List, ContactItem } from './ContactList.module';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <Container>
      <List>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}
            <Button
              onClick={() => {
                onRemove(contact.id);
              }}
            >
              Delete
            </Button>
          </ContactItem>
        ))}
      </List>
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onRemove: PropTypes.func,
};

export default ContactList;
