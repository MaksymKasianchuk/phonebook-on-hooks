import styled from '@emotion/styled';
import { Form } from 'formik';

export const RegisterFormStyled = styled(Form)`
    border-radius:  ${props => props.theme.radii.cardBorderRadius}px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid  ${props => props.theme.colors.border};
`;