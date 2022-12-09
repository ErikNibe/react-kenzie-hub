import { useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { setUserInfo } = useContext(UserContext);

    const [addTechs, setAddTechs] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [techInfo, setTechInfo] = useState(null);

    const createTech = async (dataTech) => {
        try {
            const response = await api.post("/users/techs", dataTech);    
            
            if(response.status === 201){
                toast.success("A tecnologia foi criada com sucesso");
            }

            const { data } = await api.get("/profile");

            setUserInfo(data);

        } catch (error) {
            toast.error("Desculpe, algo deu errado!");
        }
    }

    const changeTech = async (dataTech) => {
        try {
            const response = await api.put(`/users/techs/${techInfo.id}`, dataTech);

            if(response.status === 201){
                toast.success("A tecnologia foi alterada com sucesso");
            }

            const { data } = await api.get("/profile");

            setUserInfo(data);

        } catch (error) {
            toast.error("Desculpe, algo deu errado!");
        }
    }

    const deleteTech = async () => {
        try {
            await api.delete(`/users/techs/${techInfo.id}`);

            toast.success("Tecnologia deletada com sucesso");

            const { data } = await api.get("/profile");

            setUserInfo(data);

            setOpenModal(false);
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <TechContext.Provider value={{ addTechs, setAddTechs, openModal, setOpenModal, techInfo, setTechInfo, createTech, changeTech, deleteTech }}>
            { children }
        </TechContext.Provider>
    )
}