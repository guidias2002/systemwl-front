export const validateLoginForm = (login: string, password: string) => {
    const errors: { login?: string; password?: string } = {};

    if (!login) {
        errors.login = "O campo login é obrigatório";
    }

    if (!password) {
        errors.password = "O campo senha é obrigatório";
    }

    return errors;
};