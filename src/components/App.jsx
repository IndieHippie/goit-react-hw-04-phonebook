import React from 'react';
import ContactForm from './ContactForn/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppStyled } from './App.module';
import { useState, useEffect } from 'react';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts !== null) {
      return [...JSON.parse(localContacts)];
    }
    return defaultContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    if (contacts.find(currentContact => currentContact.name === contact.name)) {
      alert(`${contact.name} is already in contact list.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const removeContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contactId !== contact.id)
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filter);
  
  return (
    <AppStyled>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={addContact} />
      <h3>Contacts</h3>
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      <ContactList onRemove={removeContact} contacts={filteredContacts} />
    </AppStyled>
  );
}

export default App;
