// App.jsx
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/student/signup';
import Login from './pages/student/login';
import Dashboard from './pages/student/homepage';
import  CompleteProfile from './pages/student/complete';
import Profile from './pages/student/profile';
import EditProfile from './pages/student/editprofile';
const App = () => {
  return (
    <Router>
      <div className="p-4 bg-gray-100">
        <nav className="space-x-4 mb-4">
          <Link to="/signup" className="text-blue-600 underline">Sign Up</Link>
          <Link to="/login" className="text-blue-600 underline">Login</Link>
        </nav>

        <Routes>
          <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         <Route path="/" element={<Dashboard />} />
         <Route path="/complete-profile" element={<CompleteProfile />} />
         <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />  
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;