import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import Section from 'components/Section';
import Filter from 'components/Filter';
import { PhoneBookForm, PhoneBookList } from 'components/PhoneBook';

const LS_KEY = 'contacts';

const getSavedContacts = () => {
  const parsedSavedItems = JSON.parse(localStorage.getItem(LS_KEY));
  return parsedSavedItems ? parsedSavedItems : [];
};

const App = () => {
  const [ contacts, setContacts ] = useState(() => getSavedContacts());
  const [ filter, setFilter ] = useState('');
  
  
  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem(LS_KEY, stringifiedContacts);
  }, [contacts]);

  const handleFormSubmit = (values) => {
    const { name, phone } = values;
    
    if(contacts.find(contact => contact.name === name)){
      alert(`${name} already in contacts!`);
      return ;
    };

    const nevContact = {
      name,
      phone,
      id: nanoid()
    };
    setContacts( prevContacts => ([...prevContacts, nevContact]) );
  };

  const handleFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };
  
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter( contact => contact.name.toLowerCase().includes(normalizedFilter) || contact.phone.toLowerCase().includes(normalizedFilter));
    return filteredContacts;
  };

  const deleteHandler = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };
  
  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <Section title="Please enter Name of contact person">
        <PhoneBookForm submitHandler={handleFormSubmit}/>
      </Section>
      {contacts.length > 0 && (
        <>
          <Section title="Filter">
            <Filter handleChange={handleFilterChange} options={['name', 'number']}/>
          </Section>

          <Section title="Your contacts">
            <PhoneBookList contacts={filteredContacts} deleteHandler={deleteHandler}/>
          </Section>
        </>
      )}
    </Container>
  );
  
}


export default App;