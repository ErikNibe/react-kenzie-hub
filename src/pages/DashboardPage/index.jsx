import Logo from "../../assets/Logo.svg";

import { Header, Main, Navbar } from "./styles";
import { ImgLogo } from "../../styles/ImgLogo"
import { Button } from "../../styles/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const DashboardPage = ({ userInfo, isLogged, setIsLogged, setUserInfo }) => {
    const navigate = useNavigate();

    useEffect(() => {
        !isLogged && navigate("/login");
    }, [isLogged]);

    const handleLogout = () => {
        window.localStorage.clear();

        setUserInfo([]);

        setIsLogged(false);
    }

    return (
        <>
            <Navbar>
                <div>
                    <ImgLogo src={Logo} alt="Logo"/>

                    <Button btnType={"black"} btnSize={"small"} onClick={() => handleLogout()}>Sair</Button>
                </div>
            </Navbar>

            <Header>
                <div>
                    <p>Olá, {userInfo.name}</p>

                    <span>{userInfo.course_module}</span>
                </div>
            </Header>

            <Main>
                <p>Que pena! Estamos em desenvolvimento :(</p>
                <span>Nossa aplicação está em desenvolviemnto, em breve teremos novidades</span>
            </Main>
        </>
    )
}