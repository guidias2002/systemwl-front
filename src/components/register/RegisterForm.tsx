import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext";
import { RegisterFormData } from "../../interfaces/userTypes";
import UserService from "../../service/UserService";
import UserCreationForm from "./UserCreationForm";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { validateUseForm } from "../../validation/ValidateUseForm";


const RegisterForm: React.FC = () => {
    const { logout } = useAuth();
    const [errors, setErrors] = useState<{ name?: string, login?: string, email?: string, password?: string }>({});

    const [formData, setFormData] = useState<RegisterFormData>({
        name: '',
        login: '',
        password: '',
        email: '',
    });

    useEffect(() => {
        logout();
    }, [logout])


    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const validationErrors = await validateUseForm(formData.name, formData.login, formData.email, formData.password);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return validationErrors;
        }
        
        try {
            await UserService.register(formData);
            window.location.reload();
            
        } catch (error) {
            console.error("Erro ao cadastrar usuário", error);
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
                Cadastro de usuário
            </Typography>

            <UserCreationForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />

            <div>
                <Link to={"login"}>Já possui cadastro? Clique aqui</Link>
            </div>
        </Container>
    );

};

export default RegisterForm;