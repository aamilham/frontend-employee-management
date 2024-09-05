import React from 'react';

const EmployeeItem = ({ employee }) => {
  return (
    <div>
      <h2>{employee.name}</h2>
      <p>Email: {employee.email}</p>
      <p>Position: {employee.position}</p>
      <p>Salary: ${employee.salary}</p>
    </div>
  );
};

export default EmployeeItem;
