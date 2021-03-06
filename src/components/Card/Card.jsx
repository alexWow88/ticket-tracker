import React, {useState} from 'react';
import "./Card.scss";
import Counter from "../Counter/Counter"

const Card = (props) => {


  const employeeArr = props.dataArray;

  const employeeCards = employeeArr.map(employee => (
    <div className="employee-card">
      <h2>{employee.name}</h2>
      <h3>{employee.role}</h3>
      <Counter />
    </div>
  ))

  return (
    <div className="employee-card-container">
      {employeeCards}
    </div>
  )
}

export default Card
