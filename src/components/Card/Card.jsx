import React from 'react';
import "./Card.scss";

const Card = (props) => {

  const employeeArr = props.dataArray;

  const employeeCards = employeeArr.map(employee => (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <h3>{employee.role}</h3>
    </div>
  ))

  return (
    <div className="employee-card-container">
      {employeeCards}
    </div>
  )
}

export default Card
