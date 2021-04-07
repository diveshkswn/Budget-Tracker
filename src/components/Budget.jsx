/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import EditBudget from './EditBudget';

function Budget() {
  const { budget } = useContext(AppContext);
  // eslint-disable-next-line no-unused-vars
  const [editBudgetForm, setEditBudgetForm] = useState(true);

  function setEditable() {
    setEditBudgetForm((oldVal) => {
      if (oldVal) {
        return false;
      }
      return true;
    });
  }
  return (
    <div className="alert alert-secondary">
      {/* <span>
        {' '}
        Budget : $
        {budget}

      </span> */}
      {editBudgetForm ? (
        <span>
          {' '}
          Budget : $
          {budget}
          <button type="button" onClick={setEditable} className="float-right  btn btn-primary">Edit</button>

        </span>
      ) : (
        <EditBudget
          setEditBudgetForm={setEditBudgetForm}
        />
      )}

    </div>
  );
}

export default Budget;
