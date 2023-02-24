import PropTypes from 'prop-types';
import { PhoneBookListStyled, PhoneBookListEmpty, ListButton } from './PhoneBook.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

export const PhoneBookList = ({ contacts }) => {
    const [ deleteContact ] = useDeleteContactMutation();

    const handleDeleteContact = async (id) => {
        try {
            await deleteContact(id);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
            { contacts.length > 0 ? (
                 <PhoneBookListStyled>
                    {
                        contacts.map( ( {name, phone, id}) => (
                            <li key={id}>
                                <p><span>{name}:</span> {phone}</p> 
                                <ListButton type='button' onClick={() => handleDeleteContact(id)}>delete</ListButton>
                            </li>
                        ))
                    }
               </PhoneBookListStyled>
            ) : (
                <PhoneBookListEmpty>Contact not find!</PhoneBookListEmpty>
            )}
        </>
    )
};

PhoneBookList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        createdAt: PropTypes.string,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired,
};