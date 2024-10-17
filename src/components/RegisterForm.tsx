import { ChangeEvent, FormEvent, useState } from "react"
import { RegisterFormData } from '../interfaces/userTypes'
import UserService from "../service/UserService";


const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<RegisterFormData>({
        name: '',
        login: '',
        password: '',
        email: '',
    });


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
        
    );

};

export default RegisterForm;