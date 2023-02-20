import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, Field } from 'formik';
import { PhoneBookFormStyled, FormGroup, ErrorMessageStyled, FormButton } from './PhoneBook.styled';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';

export const PhoneBookForm = () => {
    const {data: contacts} = useGetContactsQuery();
    const [ addContact ] = useAddContactMutation();
    const nameId = nanoid(); 
    const phoneId = nanoid(); 

    let schema = yup.object().shape({
        name: yup.string().matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 
            { 
                message: 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan',
                excludeEmptyString: true 
            }).required('Required'),
        phone: yup.string().matches(
            /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 
            { 
                message: 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
                excludeEmptyString: true 
            }).required()
    });

    const initVal = { 
        name: '',
        phone: ''
    };

    const handleSubmit = async (values, actions) => {
        const { name } = values;
        
        if(contacts.find(contact => contact.name === name)){
          alert(`${name} already in contacts!`);
          return ;
        };
        try {
            await addContact(values);
        } catch (error) {
            console.log(error);
        }

        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initVal}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <PhoneBookFormStyled>
                <FormGroup>
                    <label htmlFor={nameId}>
                        Name
                        <Field type="text" id={nameId} name="name" placeholder="Enter Name" />
                    </label>
                    <ErrorMessageStyled name="name" component='div'/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor={phoneId}>
                        Number
                        <Field type="tel" id={phoneId} name="phone" placeholder="Enter phone number" />
                    </label>
                    <ErrorMessageStyled name="phone" component='div'/>
                </FormGroup>
                <FormButton type="submit">Add contact</FormButton>
            </PhoneBookFormStyled>
        </Formik>
    )
};
