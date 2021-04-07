/* eslint-disable linebreak-style */
import React, { useState, useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

function ExpenseList() {
  const { expenses } = useContext(AppContext);
  const [expenseKey, setExpenseKey] = useState('');

  function populateExpenses(expense) {
    if (String(expense.name).startsWith(expenseKey) || expenseKey === '') {
      return (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      );
    }
    return null;
    // return (<ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />);
  }

  function searchExpenses(event) {
    setExpenseKey(String(event.target.value));
  }
  return (
    <div>
      <input className="form-control mb-4" type="text" value={expenseKey} onChange={searchExpenses} name="searchExp" placeholder="Type here to search for expenses" />
      <ul className="list-group">
        {expenses.map(populateExpenses)}
      </ul>
    </div>

  );
}

export default ExpenseList;
