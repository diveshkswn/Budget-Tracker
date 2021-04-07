/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */

import React, { createContext, useReducer } from 'react';

function AppReducer(state, action) {
  // console.log(action.payload);
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state, // state contains current values ex : {budget : 5000 , expenses : []}
        expenses: [...state.expenses, action.payload], // This line will override the expense value
        // for key expense with adding appending all existing values in it. using spread operator
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };

    case 'EDIT_BUDGET': return { ...state, budget: action.payload };

    default: return state;
  }
}

const initialState = {
  budget: 5000,
  expenses: [
    { id: 11, name: 'shopping', cost: 10 },
    { id: 12, name: 'grocery', cost: 35 },
    { id: 13, name: 'partyyyy', cost: 20 },
    { id: 14, name: 'Vacation', cost: 50 },
    { id: 15, name: 'Above values are defualt values from AppReducer initial state. ', cost: 50 },
    { id: 16, name: 'You can remove them by clicking the cross button in right ->', cost: 50 },

  ],

};

const AppContext = createContext();

function AppProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}

    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
