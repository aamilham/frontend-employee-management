import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const EmployeeForm = ({ employee, onFormSubmit }) => {
  const { authToken } = useContext(AuthContext);
  const [name, setName] = useState(employee ? employee.name : '');
  const [email, setEmail] = useState(employee ? employee.email : '');
  const [position, setPosition] = useState(employee ? employee.position : '');
  const [salary, setSalary] = useState(employee ? employee.salary : '');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const employeeData = { name, email, position, salary };

    try {
        if (employee) {
          await axios.put(`http://localhost:8000/api/employees/${employee.id}`, employeeData, {
            headers: { Authorization: `Bearer ${authToken}` },
          });
        } else {
          await axios.post('http://localhost:8000/api/employees', employeeData, {
            headers: { Authorization: `Bearer ${authToken}` },
          });
        }
  
        navigate('/employees');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
  };

  return (
    <div>
        <h1>{employee ? 'Edit Employee' : 'Tambah Karyawan Baru'}</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" />
            <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Salary" />
            <button type="submit">{employee ? 'Update' : 'Create'} Employee</button>
        </form>
    </div>
  );
};

export default EmployeeForm;
