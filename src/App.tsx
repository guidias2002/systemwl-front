import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';
import Main from './pages/Main';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/main" element={<ProtectedRoute><Main /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
