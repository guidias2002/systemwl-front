import React, { createContext, useContext, useState } from 'react';


interface AuthContextType {
    token: string | null;
    loginUser: (newToken: string, loginData: string) => void;
    loginField: string | null;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("authToken"));
    const [loginField, setloginField] = useState<string | null>(localStorage.getItem("loginField"));

    const loginUser = (newToken: string, loginData: string) => {
        setToken(newToken);
        setloginField(loginData);
        localStorage.setItem("authToken", newToken);
        localStorage.setItem("loginField", loginData);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("loginField");
    };

    return (
        <AuthContext.Provider value={{ token, loginUser, logout, loginField }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};
