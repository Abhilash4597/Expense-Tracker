import React from 'react'

export default function ExpenseDate(props) {

  let day = props.date.getDay();
  let month = props.date.getMonth();
  let year = props.date.getFullYear();
  
  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}
