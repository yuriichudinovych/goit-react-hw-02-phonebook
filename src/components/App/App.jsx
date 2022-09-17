import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  addContacts = contact => {
    if (this.isDuplicate(contact)) {
      return alert(`${contact.name} - is already on the site`);
    }

    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  removeContacts = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(contact => contact.id !== id);

      return { contacts: newContacts };
    });
  };

  isDuplicate({ name }) {
    const { contacts } = this.state;
    const result = contacts.find(contact => contact.name === name);
    return result;
  }

  getFilteredContacts() {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const FilteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();

      return normalizedName.includes(normalizedFilter);
    });

    return FilteredContacts;
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />
        {this.state.contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter
              filter={this.state.filter}
              handleChange={this.handleChange}
            />
            <ContactList
              contacts={this.getFilteredContacts()}
              removeContacts={this.removeContacts}
            />
          </>
        )}
      </div>
    );
  }
}
