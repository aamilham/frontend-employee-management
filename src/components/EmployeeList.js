import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import EmployeeItem from './EmployeeItem';
import Logout from './Logout';

const EmployeeList = () => {
  const { authToken } = useContext(AuthContext);
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [positionFilter, setPositionFilter] = useState('');
  const [salaryRange, setSalaryRange] = useState([0, 100000]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get('http://localhost:8000/api/employees', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setEmployees(response.data);
    };
    fetchEmployees();
  }, [authToken]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPositionFilter(event.target.value);
  };

  const handleSalaryRangeChange = (event) => {
    const [min, max] = event.target.value.split(',');
    setSalaryRange([min, max]);
  };

  const filteredEmployees = employees
    .filter((employee) => employee.name.toLowerCase().includes(search.toLowerCase()))
    .filter((employee) => employee.position.includes(positionFilter))
    .filter(
      (employee) => employee.salary >= salaryRange[0] && employee.salary <= salaryRange[1]
    );

  return (
    <div>
    <h1>Employee List</h1>
    <button onClick={Logout}>Logout</button>
      <input type="text" value={search} onChange={handleSearch} placeholder="Search by name" />
      <select value={positionFilter} onChange={handlePositionChange}>
        <option value="">All Positions</option>
        <option value="user">User</option>
        <option value="superadmin">Superadmin</option>
      </select>
      {/* <input
        type="range"
        min="0"
        max="100000"
        value={salaryRange.join(',')}
        onChange={handleSalaryRangeChange}
      /> */}
      <div>
        {filteredEmployees.map((employee) => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))}
      </div>
      <Link to="/employee-form">Tambah Karyawan Baru</Link>
    </div>
  );
};

export default EmployeeList;
