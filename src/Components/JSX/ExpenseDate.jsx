import React from 'react';
import '../CSS/ExpenseDate.css';

export default function ExpenseDate(props) {
  let day = props.date.getDay();
  let month = props.date.toLocaleString('default', { month: 'long' });
  let year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_day">{day}</div>
    </div>
  );
}
