/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ExpenseTotal() {
  const { expenses } = useContext(AppContext);
  let expenseTotal = 0;

  expenses.forEach((e) => { expenseTotal += e.cost; });

  return (
    <div className="alert alert-primary">
      <span>
        Spend so far : $
        {expenseTotal}
      </span>
    </div>
  );
}
export default ExpenseTotal;
