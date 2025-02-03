import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import LoginPage from './pages/Auth/login_page/LoginPage';
import SignupPage from './pages/Auth/signup_page/SignupPage';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
