import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormGroup, ErrorMessageStyled, FormButton } from 'components/PhoneBook/PhoneBook.styled';
import { RegisterFormStyled } from './RegisterForm.styled';

const RegisterForm = () => {
    const nameId = nanoid(); 
    const emailId = nanoid(); 
    const passwordId = nanoid(); 
    const dispatch = useDispatch();

    const initVal = { 
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = async (values, actions) => {
        await dispatch(register(values));
        actions.resetForm();
    };

    let schema = yup.object().shape({
        name: yup.string().required('Required'),
        email: yup.string().required('Required'),
        password: yup.string().required('Required'),
    });

    return (
        <Formik
            initialValues={initVal}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
            <RegisterFormStyled>
                <FormGroup>
                    <label htmlFor={nameId}>
                        Name
                        <Field type="text" id={nameId} name="name" placeholder="Enter Name" />
                    </label>
                    <ErrorMessageStyled name="name" component='div'/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor={emailId}>
                        Email
                        <Field type="email" id={emailId} name="email" placeholder="mail@mail.com" />
                    </label>
                    <ErrorMessageStyled name="email" component='div'/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor={passwordId}>
                        Password
                        <Field type="text" id={passwordId} name="password" placeholder="Enter Password" />
                    </label>
                    <ErrorMessageStyled name="password" component='div'/>
                </FormGroup>
                <FormButton type="submit">Register</FormButton>
            </RegisterFormStyled>
        </Formik>
    )
};

export default RegisterForm;