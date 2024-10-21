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


const login = async(loginUserData: LoginUser): Promise<{ data: string }> => {
    try {
        const response = await axios.post(`${API_URL}/login`, loginUserData);
        return response;
    } catch (error) {
        console.error('Erro ao fazer login', error);
        throw error;
    }
};

export default {
    register,
    login,
};

