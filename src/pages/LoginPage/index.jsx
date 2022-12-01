import Logo from "../../assets/Logo.svg";

import { Container } from "../../styles/Container";
import { FormContainer } from "../../styles/FormContainer";
import { Input } from "../../styles/Input";
import { LabelText } from "../../styles/Label";
import { Button } from "../../styles/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";

import { api } from "../../api/api";
import { useState } from "react";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { ImgLogo } from "../../styles/ImgLogo";

export const LoginPage = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "gabriel@kenzie.com.br",
            password: "123456"
        },
        resolver: yupResolver(loginSchema)
    });

    const userLogin = async (data) => {
        try {
            setLoading(true);

            const response = await api.post("/sessions", data);
            
            if(response.status === 200){
                toast.success("Login realizado com sucesso");

                window.localStorage.clear();
                window.localStorage.setItem("@TOKEN", response.data.token);
                window.localStorage.setItem("@USERID", response.data.user.id);
            }
            

        } catch (error) {
            toast.error("O email ou a senha estão incorretos")
        } finally {
            setLoading(false)
        }
    }
    
    const submit = async (data) => {
        await userLogin(data);

        reset();
    }

    return (
        <Container>
            
            <ImgLogo src={Logo} alt="Logo"/>

            <FormContainer noValidate onSubmit={handleSubmit(submit)}>
                <h2>Login</h2>

                <LabelText htmlFor="email">Email</LabelText>
                <Input
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    {...register("email")}
                    disabled={loading}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <LabelText htmlFor="password">Senha</LabelText>
                <Input
                    type="password" 
                    id="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                    disabled={loading}
                />
                {errors.password && <span>{errors.password.message}</span>}

                <Button btnType={"pink"} btnSize={"big"}  type="submit" >{loading ? "Enviando..." : "Enviar"}</Button>

                <span>Ainda não possui uma conta?</span>

                <Button btnType={"gray"} btnSize={"big"} type="button" onClick={() => navigate("/register")}>Cadastre-se</Button>
            </FormContainer>
        </Container>
    )
}