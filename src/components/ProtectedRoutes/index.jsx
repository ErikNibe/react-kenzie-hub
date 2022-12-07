import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const ProtectedRoutes = () => {
    const { userInfo, searching } = useContext(AuthContext);

    if(searching){
        return null;
    }

    return userInfo ? <Outlet /> : <Navigate to={"/login"} />
}