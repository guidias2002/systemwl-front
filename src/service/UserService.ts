import axios from "axios";
import { LoginUser, RegisterFormData } from "../interfaces/userTypes";


const API_URL = 'http://localhost:8080/user';


// função para registra usuário
const register = async(formData: RegisterFormData): Promise<void> => {
    try {
        await axios.post(API_URL, formData)
    } catch (error) {
        console.error('Erro ao registrar usuário', error);
        throw error;
    }
};


const login = async(loginUserData: LoginUser): Promise<{ token: string, login: string }> => {
    try {
        const response = await axios.post(`${API_URL}/login`, loginUserData);
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer login', error);
        throw error;
    }
};


// implementar a verificação de login e email cadastrado

export default {
    register,
    login,
};

