import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../api/api";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const [searching, setSearching] = useState(true);

    const [userInfo, setUserInfo] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@TOKEN");

            if(!token) {
                return;
            }

            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;

                const { data } = await api.get("/profile")

                setUserInfo(data);
                
            } catch (error) {
                console.error(error);
                
            } finally {
                setSearching(false);
            }
        }

        loadUser();
    })

    const userLogin = async (data) => {
        try {
            setLoading(true);

            const response = await api.post("/sessions", data);

            const { token } = response.data;

            if(response.status === 200){
                toast.success("Login realizado com sucesso");
                
                window.localStorage.clear();
                localStorage.setItem("@TOKEN", token);
                localStorage.setItem("@USERID", response.data.user.id);
                
                api.defaults.headers.common.authorization = `Bearer ${token}`;

                setTimeout(() => navigate("/dashboard"), 1500);
                
            }

        } catch (error) {

            toast.error("O email ou a senha estão incorretos");

        } finally {

            setLoading(false);
            
        }
    }

    return (
        <AuthContext.Provider value={{ userLogin, loading, userInfo, setUserInfo, searching, navigate }}>
            { children }
        </AuthContext.Provider>
    )
}