import UserService from "../service/UserService";

export const validateUseForm = async (name: string, login: string, email: string, password: string) => {
    const errors: { name?: string, login?: string, email?: string, password?: string } = {};

    const { loginExists, emailExists } = await UserService.checkUser(login, email);


    if(loginExists) {
        errors.login = "Este login já está em uso."
    }

    if(emailExists) {
        errors.email = "Este email já está em uso."
    }

    if(!login) {
        errors.login = "O campo login é obrigatório"
    }

    if(!email) {
        errors.email = "O campo email é obrigatório"
    }

    if(!name) {
        errors.name = "O campo nome é obrigatório"
    }

    if(!password) {
        errors.password = "O campo senha é obrigatório"
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password)) {
        errors.password = "A senha deve ter pelo menos uma letra maiúscula, um número e no mínimo 8 caracteres.";
    }


    return errors;
}