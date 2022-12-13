import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../api/api";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const [searching, setSearching] = useState(true);

    const [userInfo, setUserInfo] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@TOKEN");

            if(!token) {
                setSearching(false);
                
                return;
            }
            
            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;

                const { data } = await api.get("/profile");

                setUserInfo(data);

                navigate("/dashboard")
                     
            } catch (error) {
                console.error(error);
                
            } finally {
                setSearching(false);
            }
        }

        loadUser();
    }, [])

    const userLogin = async (data) => {
        try {
            setLoading(true);

            const response = await api.post("/sessions", data);

            const { token, user } = response.data;
            
            setUserInfo(user)

            toast.success("Login realizado com sucesso");
            
            window.localStorage.clear();
            localStorage.setItem("@TOKEN", token);
            localStorage.setItem("@USERID", response.data.user.id);
            
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            setTimeout(() => navigate("/dashboard"), 1500);

        } catch (error) {

            toast.error("O email ou a senha estão incorretos");

        } finally {

            setLoading(false);
            
        }
    }

    const userRegister = async (data) => {
        try {
            setLoading(true);

            const response = await api.post("/users", data);
            
            if(response.data){
                toast.success("Conta criada com sucesso, você será redirecionado para a página de login automaticamente");

                setTimeout(() => navigate("/login"), 4000)
            }
        } catch (error) {

            toast.error("Ops! Algo deu errado");

        } finally {

            setLoading(false);
            
        }
    }

    return (
        <UserContext.Provider value={{ userLogin, userRegister, loading, userInfo, setUserInfo, searching, navigate }}>
            { children }
        </UserContext.Provider>
    )
}