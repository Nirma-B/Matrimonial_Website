import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import Header from './Components/Header.js'; 
import HomePage from './Components/HomePage.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import AdminDashboard from './Components/AdminDashboard.js';
import UserDashboard from './Components/UserDashboard.js';
import AboutUs from './Components/AboutUs.js';
import Services from './Components/Services.js';
import Faqs from './Components/Faqs.js';
import ProtectedRoute from './Components/ProtectedRoute.js';


function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/about-us" element={<AboutUs />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
