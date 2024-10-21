import React, { ChangeEvent, FormEvent, useState } from "react";
import { LoginUser } from "../interfaces/userTypes";
import UserService from "../service/UserService";
import { Container, Typography } from "@mui/material";
import UserLoginForm from "./UserLoginForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginForm: React.FC = () => {
    const { login } = useAuth();
    const [loginData, setLoginData] = useState<LoginUser>({
        login: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await UserService.login(loginData);
            const token = response.data;
            
            login(token);
            navigate("/dashboard")
        } catch (error) {
            console.error("Erro ao logar", error);
            alert("Erro ao logar.");
        }
    };

    return (
        <Container>
            <Typography>
                Login
            </Typography>

            <UserLoginForm
                loginData={loginData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </Container>
    )
}

export default LoginForm;