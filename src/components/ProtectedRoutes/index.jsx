import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const ProtectedRoutes = () => {
    const { userInfo, searching } = useContext(UserContext);

    if(searching){
        return null;
    }

    return userInfo ? <Outlet /> : <Navigate to={"/login"} />
}