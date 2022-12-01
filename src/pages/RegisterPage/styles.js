import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 40px;
`

export const Select = styled.select`
    width: 100%;
    height: 48px;
    padding: 0 16px;

    border: 1.20px solid var(--gray2);
    border-radius: 4px;

    background-color: var(--gray2);

    font-weight: 400;
    font-size: 16px;
    color: var(--gray1);
`