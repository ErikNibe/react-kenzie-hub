import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const ProtectedRoutes = () => {
    const { userInfo, searching } = useContext(UserContext);
    const location = useLocation();

    if(searching){
        return null;
    }

    return userInfo ? <Outlet /> : <Navigate to={"/login"} replace state={{from: location}}/>
}