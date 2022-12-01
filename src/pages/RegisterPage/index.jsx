import Logo from "../../assets/Logo.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./registerSchema";

import { toast } from "react-toastify";

import { HeaderContainer, Select } from "./styles";
import { Container } from "../../styles/Container";
import { ImgLogo } from "../../styles/ImgLogo";
import { Button } from "../../styles/Button";
import { FormContainer } from "../../styles/FormContainer";
import { LabelText } from "../../styles/Label";
import { Input } from "../../styles/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export const RegisterPage = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        mode: "onChange",

        defaultValues: {
            name: "erik",
            email: "erik@mail.com",
            password: "32181691860e*",
            confirmPassword: "32181691860e*",
            bio: "Ola mundo",
            contact: "123456789"
        },

        resolver: yupResolver(loginSchema)
    })

    const userRegister = async (data) => {
        try {
            setLoading(true);

            const response = await api.post("/users", data);
            
            if(response.data){
                toast.success("Conta criada com sucesso");

                navigate("/login");
            }
        } catch (error) {
            toast.error("Ops! Algo deu errado");
        } finally {
            setLoading(false);
        }
    }

    const submit = async (data) => {
        delete data.confirmPassword;

        await userRegister(data);
    }

    return (
        <Container>
            <HeaderContainer>
                <ImgLogo src={Logo} alt="Logo" />

                <Button btnType={"black"} btnSize={"small"} onClick={() => navigate("/login")}>Voltar</Button>
            </HeaderContainer>

            <FormContainer onSubmit={handleSubmit(submit)}>
                <h2>Crie sua conta</h2>

                <span>Rápido e grátis, vamos nessa</span>

                <LabelText htmlFor="name">Nome</LabelText>
                <Input
                    type="text"
                    id="name"
                    placeholder="Digite seu nome"
                    {...register("name")}
                    disabled={loading}
                />
                {errors.name && <span>{errors.name.message}</span>}

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

                <LabelText htmlFor="confirmPassword">Confirmar senha</LabelText>
                <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Digite novamente sua senha"
                    {...register("confirmPassword")}
                    disabled={loading}
                />
                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

                <LabelText htmlFor="bio">Bio</LabelText>
                <Input
                    type="text"
                    id="bio"
                    placeholder="Fale sobre você"
                    {...register("bio")}
                    disabled={loading}
                />
                {errors.bio && <span>{errors.bio.message}</span>}

                <LabelText htmlFor="contact">Contato</LabelText>
                <Input
                    type="text"
                    id="contact"
                    placeholder="Opção de contato"
                    {...register("contact")}
                    disabled={loading}
                />
                {errors.contact && <span>{errors.contact.message}</span>}

                <LabelText htmlFor="contact">Selecionar módulo</LabelText>
                <Select {...register("course_module")}>
                    <option value="" hidden>Escolha o módulo</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </Select>

                <Button btnType={"wine"} btnSize={"big"} type="submit">Cadastrar</Button>
            </FormContainer>
        </Container>
    )
}