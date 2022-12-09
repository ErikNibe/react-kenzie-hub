import Logo from "../../assets/Logo.svg";
import Bin from "../../assets/Bin.svg";

import {
  BtnAdd,
  BtnRemove,
  Header,
  Main,
  Navbar,
  TechContainer,
  TechItem,
  TechList,
} from "./styles";
import { ImgLogo } from "../../styles/ImgLogo";
import { Button } from "../../styles/Button";
import { Modal } from "../../components/Modal/Modal";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";

export const DashboardPage = () => {

  const { userInfo, setUserInfo } = useContext(UserContext);
  
  const { setAddTechs, openModal, setOpenModal, setTechInfo } = useContext(TechContext);
  
  const handleLogout = () => {
    localStorage.clear();

    setUserInfo(null);
  };

  return (
    <>
      <Navbar>
        <div>
          <ImgLogo src={Logo} alt="Logo" />

          <Button
            btnType={"black"}
            btnSize={"small"}
            onClick={() => handleLogout()}
          >
            Sair
          </Button>
        </div>
      </Navbar>

      <Header>
        <div>
          <p>Olá, {userInfo.name}</p>

          <span>{userInfo.course_module}</span>
        </div>
      </Header>

      <Main>

        <TechContainer>
          <div>
            <h3>Tecnologias</h3>

            <BtnAdd onClick={() => {
              setAddTechs(true) 
              setOpenModal(true)
            }}>+</BtnAdd>
          </div>

          {userInfo.techs.length === 0 ?
            <p>Você ainda não tem nenhuma tecnologia cadastrada</p>
          :
            <TechList>
              {userInfo.techs.map((tech) => (
                <TechItem key={tech.id} onClick={() => {
                  setTechInfo(tech);
                  setOpenModal(true);
                }}>
                  <h4>{tech.title}</h4>

                  <div>
                    <span>{tech.status}</span>

                    <BtnRemove><img src={Bin} alt="Lixeira" className="bin" /></BtnRemove>
                  </div>
              </TechItem>
              ))}
            </TechList>
          }
        </TechContainer>
      </Main>

      { openModal && <Modal />}
    </>
  );
};
