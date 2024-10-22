import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext";
import { RegisterFormData } from "../../interfaces/userTypes";
import UserService from "../../service/UserService";
import UserCreationForm from "./UserCreationForm";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const RegisterForm: React.FC = () => {
    const { logout } = useAuth();
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
        
        try {
            await UserService.register(formData);
            alert("Usuário cadastrado com sucesso.")
        } catch (error) {
            console.error("Erro ao cadastrar usuário", error);
            alert("Erro ao cadastrar usuário.");
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
            />

            <div>
                <Link to={"login"}>Já possui cadastro? Clique aqui</Link>
            </div>
        </Container>
    );

};

export default RegisterForm;