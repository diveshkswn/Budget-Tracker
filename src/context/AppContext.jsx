/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */

import React, { createContext, useReducer } from 'react';

function AppReducer(state, action) {
  switch (action.type) {
    default: return state;
  }
}

const initialState = {
  budget: 5000,
  expenses: [
    { id: 11, name: 'shopping', cost: 10 },
    { id: 12, name: 'grocery', cost: 35 },
    { id: 13, name: 'partyyyy', cost: 20 },

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
