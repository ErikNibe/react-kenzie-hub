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
`;

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
`;

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

  @media (max-width: 800px) {
    max-width: 90%;
  }
`;

export const TechContainer = styled.div`
  color: #ffffff;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const BtnAdd = styled.button`
  width: 32px;
  height: 32px;

  border: none;
  border-radius: 4px;

  font-weight: 700;
  font-size: 20px;
  color: #ffffff;

  background-color: var(--gray3);

  &:hover {
    background-color: var(--gray2);
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 22px;

  padding: 24px;

  border-radius: 4px;

  background-color: var(--gray3);
`;

export const TechItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 49px;
  padding: 13px 22px;

  border-radius: 4px;

  background-color: var(--gray4);

  & > div {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  & > div > span {
    font-weight: 400;
    font-size: 12px;
    color: var(--gray1);
  }

  &:hover {
    background-color: var(--gray2);

    cursor: pointer;
  }
`;

export const BtnRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 30px;
  height: 30px;

  border: none;

  background: none;

  .bin:hover{
    fill: red;
  }
`;
