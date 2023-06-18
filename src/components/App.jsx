import React, { Component } from 'react';

import { nanoid } from 'nanoid';

import { Layout } from './GlobalStyle/Layout/Layout.styled';

import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter/Filter';
import initialContacts from '../data/contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    // Перше завантаженн (пустий локалсторедж) контактів з json
    if (contacts === null) {
      this.setState({ contacts: initialContacts });
      // Якщо всі контакти видалені (локалсторедж пустийрядок), контакти беруться з json
    } else if (contacts.length < 3) {
      this.setState({ contacts: initialContacts });
      // Якщо в локалсторедж є контакти. вони беруться з нього
    } else if (contacts !== null) {
      this.setState({ contacts: JSON.parse(contacts) });
    } else {
      //
      // } else if (this.state.contacts.length < 1) {
      //   this.setState({ contacts: contactsData });
      // } else {
      console.log('Відсутні контакти!');
    }
  }

  addContact = ({ name, number }) => {
    const addContact = { id: nanoid(), name, number };
    const normalizedName = name.toLowerCase();

    const currentName = this.state.contacts.find(
      item => item.name.toLowerCase() === normalizedName
    );

    if (currentName) {
      alert(`${name} is already exist!`);
      return;
    }

    this.setState(prevState => ({
      contacts: [addContact, ...prevState.contacts],
    }));
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedCaseContacts = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedCaseContacts)
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

    return (
      <Layout>
        <Section title="Add contact">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        {contacts.length > 0 && (
          <Section
            title="Contacts"
            headerContent={
              <Filter value={filter} onChange={this.changeFilter} />
            }
          >
            <ContactList
              contacts={filteredContacts}
              onRemove={this.removeContact}
            />
          </Section>
        )}
      </Layout>
    );
  }
}
