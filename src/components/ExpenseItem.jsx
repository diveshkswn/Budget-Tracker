/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  function handleDeleteExpense() {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id, // id which needs to be deleted
    });
  }

  return (

    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          {props.cost }
          {' '}
          $

        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>

    </li>
  );
}

export default ExpenseItem;
