import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface UserLoginFormProps {
    loginData: {
        login: string;
        password: string;
    };
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;

}

const UserLoginForm: React.FC<UserLoginFormProps> = ({ loginData, handleChange, handleSubmit }) => {
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="login"
                label="Login"
                name="login"
                autoComplete="login"
                autoFocus
                value={loginData.login}
                onChange={handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={loginData.password}
                onChange={handleChange}
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