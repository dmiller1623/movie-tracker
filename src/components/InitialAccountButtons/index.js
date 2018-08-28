import React from 'react';

export const InitialAccountButtons = ({ handleLogin }) => {

  return (
    <div>
      <button
        onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  );
};
