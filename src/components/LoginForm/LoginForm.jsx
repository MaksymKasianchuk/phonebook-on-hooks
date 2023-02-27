import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const LoginForm = () => {
    const emailId = nanoid(); 
    const passwordId = nanoid(); 
    const dispatch = useDispatch();

    const initVal = { 
        email: '',
        password: '',
    };

    const handleSubmit = async (values, actions) => {
        // const { name } = values;
        await dispatch(login(values));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initVal}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor={emailId}>
                        Email
                        <Field type="email" id={emailId} name="email" placeholder="mail@mail.com" />
                    </label>
                    <ErrorMessage name="email" component='div'/>
                </div>
                <div>
                    <label htmlFor={passwordId}>
                        Password
                        <Field type="text" id={passwordId} name="password" placeholder="Enter Password" />
                    </label>
                    <ErrorMessage name="password" component='div'/>
                </div>
                <button type="submit">Log in</button>
            </Form>
        </Formik>
    )
};

export default LoginForm;