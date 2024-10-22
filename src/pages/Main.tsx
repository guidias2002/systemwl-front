import { useAuth } from "../context/AuthContext";

const Main: React.FC = () => {
    const { loginField } = useAuth();

    return (
        <h1>ola {loginField}</h1>
    )
}

export default Main;