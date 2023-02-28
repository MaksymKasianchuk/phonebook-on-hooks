import styled from '@emotion/styled';

export const AuthStyled = styled.nav`
    &>a{
        margin-left: 15px;
        display: inline-block;
        border-radius:  ${props => props.theme.radii.button}px;
        outline: none;
        border: 1px solid ${props => props.theme.colors.border};
        background: ${props => props.theme.colors.cardBgColorDarker};
        padding: 10px 20px;
        cursor: pointer;
        transition: opacity 250ms linear;
        color: ${props => props.theme.colors.lightText};
        text-decoration: none;
        &:hover{
            opacity: 0.5;
        }
        &.active{
            background: ${props => props.theme.colors.bodyBg};
        }
    }
`;