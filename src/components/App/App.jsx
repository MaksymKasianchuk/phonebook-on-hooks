import { useState } from 'react'
import { Container } from './App.styled';
import Section from 'components/Section';
import Filter from 'components/Filter';
import { PhoneBookForm, PhoneBookList } from 'components/PhoneBook';
import { useGetContactsQuery } from 'redux/contactsApi';

const App = () => {
  const [ filter, setFilter ] = useState('');
  const {data: contacts, error, isLoading} = useGetContactsQuery();

  const handleFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter( contact => contact.name.toLowerCase().includes(normalizedFilter) || contact.phone.toLowerCase().includes(normalizedFilter));
    return filteredContacts;
  };
    
  return (
    <Container>
      <Section title="Please enter Name of contact person">
        <PhoneBookForm />
      </Section>
      {error && <p>Error occurred: {error}</p>}
      {isLoading && <p>Please Wait ...</p>}
      {!isLoading && (
        <>
          <Section title="Filter">
            <Filter handleChange={handleFilterChange} options={['name', 'number']}/>
          </Section>

          <Section title="Your contacts">
            <PhoneBookList contacts={getFilteredContacts()}/>
          </Section>
        </>
      )}
    </Container>
  );
  
}


export default App;