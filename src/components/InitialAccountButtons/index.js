import React from 'react';

export const InitialAccountButtons = ({handleLogin, handleSignUp}) => {

  return (
    <div>
        <button
          onClick={() => handleLogin()}>
          Login
        </button>
        <button
          onClick={() => handleSignUp()}>
          Sign Up
        </button>
    </div>
  );
};
