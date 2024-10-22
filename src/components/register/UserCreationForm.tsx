import React, { ChangeEvent } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface UserCreationFormProps {
    formData: {
        name: string;
        login: string;
        password: string;
        email: string;
    };
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

const UserCreationForm: React.FC<UserCreationFormProps> = ({ formData, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}> 
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 2, 
                    width: '100%' 
                }}
            >
                <TextField
                    fullWidth
                    label="Nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    size="medium"
                    required
                />
                <TextField
                    fullWidth
                    label="Login"
                    name="login"
                    value={formData.login}
                    onChange={handleChange}
                    size="medium"
                    required
                />
                <TextField
                    fullWidth
                    label="Senha"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    size="medium"
                    required
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    size="medium"
                    required
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Cadastrar
                </Button>
            </Box>
        </form>
    );
};


export default UserCreationForm;
