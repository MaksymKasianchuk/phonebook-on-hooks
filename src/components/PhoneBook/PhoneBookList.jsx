import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';
import { PhoneBookListStyled, PhoneBookListEmpty, ListButton } from './PhoneBook.styled';

export const PhoneBookList = ({ contacts }) => {
    const dispatch = useDispatch();

    return(
        <>
            { contacts.length > 0 ? (
                 <PhoneBookListStyled>
                    {
                        contacts.map( ( {name, phone, id}) => (
                            <li key={id}>
                                <p><span>{name}:</span> {phone}</p> 
                                <ListButton type='button' onClick={() => dispatch(deleteContact(id))}>delete</ListButton>
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
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired,
};