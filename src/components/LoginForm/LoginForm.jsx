import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { LoginFormStyled } from './LoginForm.styled';
import { FormGroup, ErrorMessageStyled, FormButton } from 'components/PhoneBook/PhoneBook.styled';

const LoginForm = () => {
    const emailId = nanoid(); 
    const passwordId = nanoid(); 
    const dispatch = useDispatch();

    const initVal = { 
        email: '',
        password: '',
    };

    const handleSubmit = async (values, actions) => {
        await dispatch(login(values));
        actions.resetForm();
    };
    let schema = yup.object().shape({
        email: yup.string().required('Required'),
        password: yup.string().required('Required'),
    });

    return (
        <Formik
            initialValues={initVal}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <LoginFormStyled>
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
                <FormButton type="submit">Log in</FormButton>
            </LoginFormStyled>
        </Formik>
    )
};

export default LoginForm;