import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface UserLoginFormProps {
    loginData: {
        login: string;
        password: string;
    };
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    errors: { login?: string; password?: string };

}

const UserLoginForm: React.FC<UserLoginFormProps> = ({ loginData, handleChange, handleSubmit, errors }) => {
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="login"
                label="Login"
                name="login"
                autoComplete="off"
                autoFocus
                value={loginData.login}
                onChange={handleChange}
                error={!!errors.login}
                helperText={errors.login}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                value={loginData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password} 
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
            >
                Entrar
            </Button>
        </Box>
    )
}

export default UserLoginForm;