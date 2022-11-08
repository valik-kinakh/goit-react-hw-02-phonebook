import Title from './common/Title';
import SubTitle from './common/SubTitle';
import ContactForm from './ContactForm';
import { useState } from 'react';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const addContact = contact => {
    setContacts(prevState => [...prevState, contact]);
  };

  return (
    <div className="app">
      <Title title="Phonebook" />
      <ContactForm addContact={addContact} />

      <SubTitle title="Contacts" />
      <Filter setSearchQuery={setSearchQuery} value={searchQuery} />
      <ContactList contacts={contacts} searchQuery={searchQuery} />
    </div>
  );
};
