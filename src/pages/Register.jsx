import RegisterForm from 'components/RegisterForm';
import { Container } from "components/App/App.styled";
import Section from 'components/Section';

const Register = () => {
    return(
        <Container>
            <Section title='Registeration page'>
                <RegisterForm />
            </Section>
        </Container>
    )
};

export default Register;