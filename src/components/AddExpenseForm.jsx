/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../context/AppContext';

function AddExpenseForm() {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const expense = {
      id: uuidv4(), // to generate random ids
      name: String(name),
      cost: parseInt(cost, 10),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    setName('');
    setCost('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required="required"
            className="form-control"
            value={name}
            onChange={(event) => { setName(event.target.value); }}

          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            id="cost"
            required="required"
            className="form-control"
            value={cost}
            onChange={(event) => { setCost(event.target.value); }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">Save</button>
        </div>
      </div>

    </form>
  );
}
export default AddExpenseForm;
