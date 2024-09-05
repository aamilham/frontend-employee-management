import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    if (authToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`; 
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [authToken]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={authToken ? <Navigate to="/employees" /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employees" element={authToken ? <EmployeeList /> : <Navigate to="/login" />} />
        <Route path="/employee-form" element={authToken ? <EmployeeForm /> : <Navigate to="/login" />} />
      </Routes>
      </Router>
  );
};

export default App;
