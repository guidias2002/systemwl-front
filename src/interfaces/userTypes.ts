export interface RegisterFormData {
    name: string;
    login: string;
    password: string;
    email: string;
}



export interface LoginUser {
    login: string;
    password: string;
}

export interface LoginResponse {
    sucess: boolean;
    userId: string;
}