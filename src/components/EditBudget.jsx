/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

function EditBudget(props) {
  const { dispatch, budget } = useContext(AppContext);
  const [budgetstate, setBudgetState] = useState(budget);

  function editTotalBudget(event) {
    setBudgetState(event.target.value);
  }
  function updateBudget() {
    const newObject = {
      type: 'EDIT_BUDGET',
      payload: budgetstate,
    };
    dispatch(newObject);
    props.setEditBudgetForm(true);
  }
  return (
    <div>

      <input type="text" name="editBudget" value={budgetstate} onChange={editTotalBudget} />
      <button type="submit" onClick={updateBudget} className=" float-right btn btn-primary">Submit</button>
    </div>

  );
}

export default EditBudget;
