import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

export const RoutesMain = ({ userInfo, setUserInfo, isLogged, setIsLogged }) => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage setUserInfo={setUserInfo} setIsLogged={setIsLogged} />} />
            <Route path="/dashboard" element={<DashboardPage userInfo={userInfo} isLogged={isLogged} setIsLogged={setIsLogged} setUserInfo={setUserInfo} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    )
}