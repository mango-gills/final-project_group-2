import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              // <PrivateRoute>
              <Profile />
              // </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              // <PrivateRoute>
              <Home />
              // </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
