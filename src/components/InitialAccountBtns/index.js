import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

export const InitialAccountBtns = () => {
  return (
    <div>
      <NavLink activeClassName='selected' className='initialBtns' to='/login'>
        Login
      </NavLink>
      <span> | </span>
      <NavLink activeClassName='selected' className='initialBtns' to='/signup'>
        Sign Up
      </NavLink>
    </div>
  );
};
