import styled from "styled-components";

export const Navbar = styled.nav`
    height: 72px;

    border-bottom: 1.5px solid var(--gray3);

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin: 0 auto;

        max-width: 700px;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 800px) {
        & > div {
            max-width: 90%;
        }
    }
`

export const Header = styled.header`
    height: 118px;

    border-bottom: 1.5px solid var(--gray3);

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin: 0 auto;

        max-width: 700px;
        width: 100%;
        height: 100%;
    }

    & > div > p {
        font-weight: 700;
        font-size: 18px;
        color: var(--gray0);
    }

    & > div > span {
        font-weight: 600;
        font-size: 12px;
        color: var(--gray1);
    }

    @media (max-width: 800px) {
        & > div {
            max-width: 90%;
        }
    }

    @media (max-width: 450px) {
        & > div {
            flex-direction: column;
            justify-content: space-around;
            align-items: start;
        }
    }
`

export const Main = styled.main`
    margin: 40px auto;

    max-width: 700px;
    width: 100%;
    height: 100%;

    & > p {
        font-weight: 700;
        font-size: 18px;
        color: var(--gray0);

        margin-bottom: 23px;
    }

    & > span {
        font-weight: 300;
        font-size: 14px;
        color: #FFFFFF;
    }

    @media (max-width: 800px) {
        max-width: 90%;
    }
`