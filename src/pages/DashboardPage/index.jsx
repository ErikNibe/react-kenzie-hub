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

import { Navigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const DashboardPage = () => {

  const { userInfo, setUserInfo } = useContext(AuthContext);
  
  const [addTechs, setAddTechs] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [techInfo, setTechInfo] = useState(null)
  
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
                  setOpenModal(true);
                  setTechInfo(tech);
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

      { openModal && <Modal addTechs={addTechs} setAddTechs={setAddTechs} setOpenModal={setOpenModal} techInfo={techInfo} setTechInfo={setTechInfo}/>}
    </>
  );
};
