import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { LoginUser } from "../../interfaces/userTypes";
import UserService from "../../service/UserService";
import { Container, Typography } from "@mui/material";
import UserLoginForm from "./UserLoginForm";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginForm: React.FC = () => {
    const { loginUser, logout } = useAuth();
    const navigate = useNavigate();

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

        try {
            const { token, login } = await UserService.login(loginData);
            
            loginUser(token, login);
            navigate("/main")
        } catch (error) {
            console.error("Erro ao logar", error);
            alert("Erro ao logar.");
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
            />

            <div>
                <Link to={"/"}>Ainda não possui cadastro?</Link>
            </div>
        </Container>
    )
}

export default LoginForm;