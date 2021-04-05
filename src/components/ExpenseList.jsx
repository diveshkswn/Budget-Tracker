/* eslint-disable linebreak-style */
import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList() {
  const expenses = [
    { id: 567, name: 'Shopping', cost: 20 },
    { id: 568, name: 'Holiday', cost: 100 },
    { id: 569, name: 'Party', cost: 50 },
  ];

  function populateExpenses(expense) {
    return (
      <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
    );
  }
  return (
    <ul className="list-group">
      {expenses.map(populateExpenses)}
    </ul>
  );
}

export default ExpenseList;
