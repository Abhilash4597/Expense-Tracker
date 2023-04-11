import React from 'react';
import ExpenseItem from './ExpenseItem';
import '../CSS/Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map(item => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
