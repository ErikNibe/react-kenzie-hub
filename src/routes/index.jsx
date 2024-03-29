import { Navigate, Route, Routes } from "react-router-dom"
import { ProtectedRoutes } from "../components/ProtectedRoutes"
import { DashboardPage } from "../pages/DashboardPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<DashboardPage />} />
            </Route>

            <Route path="*" element={<LoginPage />} />
        </Routes>
    )
}