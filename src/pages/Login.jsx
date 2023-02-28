import LoginForm from 'components/LoginForm';
import { Container } from "components/App/App.styled";
import Section from 'components/Section';

const Login = () => {
    return(
        <Container>
            <Section title='Login page'>
                <LoginForm />
            </Section>
        </Container>
    )
};

export default Login;