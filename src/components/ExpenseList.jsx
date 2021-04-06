/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

function ExpenseList() {
  const { expenses } = useContext(AppContext);

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
