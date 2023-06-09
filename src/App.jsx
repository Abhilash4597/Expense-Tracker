import React from 'react';
import Expenses from './Components/JSX/Expenses';
import './App.css'

export default function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Milk Powder',
      amount: 94.12,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2022, 5, 18),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 8, 30),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 3, 15),
    },
  ];
  return <Expenses expenses={expenses} />;
}
