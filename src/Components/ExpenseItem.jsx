import React from 'react';
import './ExpenseItem.css';

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>April 9th 2023</div>
      <div className="expense-item_description">
        <h2>Car Insurance</h2>
        <div className="expense-item_price">$200</div>
      </div>
    </div>
  );
}
