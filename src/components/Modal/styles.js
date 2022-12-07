import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    inset: 0;
    width: 100%;
    height: 100vh;

    z-index: 99;

    background-color: rgba(0,0,0,.5);
`

export const ModalContainer = styled.div`
    width: 369px;
    height: 342px;

    .modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        height: 50px;
        padding: 12px;

        background-color: var(--gray2);
    }

    .modal__header > h3 {
        font-weight: 700;
        font-size: 14px;
        color: var(--gray0);
    }

    .modal__header > button {
        border: none;

        background: none;
        
        font-weight: 600;
        font-size: 16px;
        color: var(--gray1);
    }

    .form__modal{
        background-color: red;
    }

    .btn__saveChanges__container {
        display: flex;
        justify-content: space-between;
    }
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