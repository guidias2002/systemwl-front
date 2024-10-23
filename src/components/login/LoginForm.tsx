import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { LoginUser } from "../../interfaces/userTypes";
import UserService from "../../service/UserService";
import { Container, Typography } from "@mui/material";
import UserLoginForm from "./UserLoginForm";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { validateLoginForm } from "../../validation/ValidateLoginForm";

const LoginForm: React.FC = () => {
    const { loginUser, logout } = useAuth();
    const navigate = useNavigate();
    const [errors, setErrors] = useState<{ login?: string, password?: string }>({});

    const [loginData, setLoginData] = useState<LoginUser>({
        login: '',
        password: '',
    });

    useEffect(() => {
        logout();
    }, [logout])


    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const validationErrors = validateLoginForm(loginData.login, loginData.password);

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return; // Impede o envio se houver erros de validação
    }

        try {
            const { token, login } = await UserService.login(loginData);
            
            loginUser(token, login);
            navigate("/main")
        } catch (error) {
            console.error("Erro ao logar", error);

            setErrors({
                password: "Login ou senha incorretos."
            })
        }
    };

    return (
        <Container
            sx={{
                width: '40%',
                margin: '0 auto', 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center', 
                mt: 5 
            }}
        >
            <Typography>
                Login
            </Typography>

            <UserLoginForm
                loginData={loginData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />

            <div>
                <Link to={"/"}>Ainda não possui cadastro?</Link>
            </div>
        </Container>
    )
}

export default LoginForm;