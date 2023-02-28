import styled from '@emotion/styled';

export const UserMenuStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    & p{
        margin: 0 15px 0 0;
        &>span{
            font-weight: 700;
        }
    }
    & button{
        display: inline-block;
        border-radius:  ${props => props.theme.radii.button}px;
        outline: none;
        border: 1px solid ${props => props.theme.colors.border};
        background: ${props => props.theme.colors.cardBgColorDarker};
        padding: 10px 20px;
        cursor: pointer;
        transition: all 250ms linear;
        &:hover{
            background: ${props => props.theme.colors.dangerBg};
        }
    }
`;