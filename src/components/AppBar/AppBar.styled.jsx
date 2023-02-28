import styled from '@emotion/styled';

export const AppBarStyled = styled.header`
    border-bottom: 2px solid ${props => props.theme.colors.border};
    background: ${props => props.theme.colors.cardBgColor};
`;

export const AppBarContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
`;
