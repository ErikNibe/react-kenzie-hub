import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 22px;

    width: 100%;
    padding: 42px 22px;

    border-radius: 4px;

    background-color: var(--gray3);
    
    & > h2 {
        text-align: center;

        font-weight: 700;
        font-size: 18px;
        color: var(--gray0);

        margin-bottom: 28px;
    }

    & > span {
        text-align: center;

        font-weight: 600;
        font-size: 12px;
        color: var(--gray1);
    }
`