import UserService from "../service/UserService";

export const validateUseForm = async (login: string, email: string) => {
    const errors: { login?: string, email?: string } = {};

    const { loginExists, emailExists } = await UserService.checkUser(login, email);

    console.log(loginExists, emailExists);

    if(loginExists) {
        errors.login = "Este login já está em uso."
    }

    if(emailExists) {
        errors.email = "Este email já está em uso."
    }

    return errors;
}