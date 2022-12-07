import Logo from "../../assets/Logo.svg";
import { ImgLogo } from "../../styles/ImgLogo";

import { Container } from "../../styles/Container";
import { FormContainer } from "../../styles/FormContainer";
import { Input } from "../../styles/Input";
import { LabelText } from "../../styles/Label";
import { Button } from "../../styles/Button";
import { Anchor } from "../../styles/Anchor";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const LoginPage = () => {

    const { userLogin, loading, navigate } = useContext(AuthContext)
    
    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        mode: "onChange",
        resolver: yupResolver(loginSchema)
    });
    
    const submit = async (data) => {
        await userLogin(data);

        reset();
    }

    return (
        <Container>
            
            <ImgLogo src={Logo} alt="Logo" page={"loginPage"}/>

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

                <Anchor btnType={"gray"} btnSize={"big"} type="button" onClick={() => navigate("/register")}>Cadastre-se</Anchor>
            </FormContainer>
        </Container>
    )
}