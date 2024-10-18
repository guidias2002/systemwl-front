import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
