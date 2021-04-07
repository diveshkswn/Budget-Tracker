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

  const alertType = totalExpenses > budget ? 'danger' : 'primary';

  return (
    <div className={`alert alert-${alertType}`}>
      <span>
        Remaining : $
        {remaining}
      </span>
    </div>
  );
}
export default Remaining;
