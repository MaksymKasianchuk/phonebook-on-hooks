import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
        const { name, email, password } = values;
        console.log(values)
        await dispatch(register({ name, email, password }));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initVal}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor={nameId}>
                        Name
                        <Field type="text" id={nameId} name="name" placeholder="Enter Name" />
                    </label>
                    <ErrorMessage name="name" component='div'/>
                </div>
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
                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
};

export default RegisterForm;