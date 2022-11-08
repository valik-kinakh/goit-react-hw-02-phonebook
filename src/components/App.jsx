import Title from './common/Title';
import SubTitle from './common/SubTitle';
import ContactForm from './ContactForm';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = contact => {
    setContacts(prevState => [...prevState, contact]);
  };

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="app">
      <Title title="Phonebook" />
      <ContactForm addContact={addContact} />

      <SubTitle title="Contacts" />
    </div>
  );
};
