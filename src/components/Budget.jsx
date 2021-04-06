/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Budget() {
  const { budget } = useContext(AppContext);

  return (
    <div className="alert alert-secondary">
      <span>
        Budget : $
        {budget}
        {/* { Value from AppContect} */}
      </span>
    </div>
  );
}

export default Budget;
