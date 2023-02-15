import { useState, useEffect } from 'react'
import { Container } from './App.styled';
import Section from 'components/Section';
import Filter from 'components/Filter';
import { PhoneBookForm, PhoneBookList } from 'components/PhoneBook';
import { useSelector } from "react-redux";
import { getContacts } from 'redux/selectors';

const App = () => {
  const [ filter, setFilter ] = useState('');
  const contacts = useSelector(getContacts);

  const handleFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };
  
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter( contact => contact.name.toLowerCase().includes(normalizedFilter) || contact.phone.toLowerCase().includes(normalizedFilter));
    return filteredContacts;
  };
  
  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <Section title="Please enter Name of contact person">
        <PhoneBookForm />
      </Section>
      {contacts.length > 0 && (
        <>
          <Section title="Filter">
            <Filter handleChange={handleFilterChange} options={['name', 'number']}/>
          </Section>

          <Section title="Your contacts">
            <PhoneBookList contacts={filteredContacts}/>
          </Section>
        </>
      )}
    </Container>
  );
  
}


export default App;