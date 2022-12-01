import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 16px;

    border: 1.20px solid var(--gray2);
    border-radius: 4px;

    background-color: var(--gray2);

    font-weight: 400;
    font-size: 16px;
    color: var(--gray1);

    &:focus {
        outline: 1.20px solid var(--gray0);

        color: var(--gray0);
    }
`