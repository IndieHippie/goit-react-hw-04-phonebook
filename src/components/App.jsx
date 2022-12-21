import React from 'react';
import ContactForm from './ContactForn/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppStyled } from './App.module';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts !== null) {
      this.setState({
        contacts: JSON.parse(contacts),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    if (
      this.state.contacts.find(
        currentContact => currentContact.name === contact.name
      )
    ) {
      alert(`${contact.name} is already in contact list.`);
      return;
    }
    this.setState({ contacts: [...this.state.contacts, contact] });
  };

  onChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts(contacts, filter);
    return (
      <AppStyled>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h3>Contacts</h3>
        <Filter onChangeFilter={this.onChangeFilter} filter={filter} />
        <ContactList
          onRemove={this.removeContact}
          contacts={filteredContacts}
        />
      </AppStyled>
    );
  }
}

export default App;
