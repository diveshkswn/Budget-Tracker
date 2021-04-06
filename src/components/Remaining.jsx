/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Remaining() {
  const { expenses, budget } = useContext(AppContext);

  let totalExpenses = 0;

  expenses.forEach((e) => {
    totalExpenses += e.cost;
  });

  const remaining = parseInt(budget, 10) - parseInt(totalExpenses, 10);

  return (
    <div className="alert alert-success">
      <span>
        Remaining : $
        {remaining}
      </span>
    </div>
  );
}
export default Remaining;
