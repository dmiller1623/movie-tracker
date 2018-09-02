import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

const UserAccountBtns = ({ name, handleSignOut }) => {
  return (
    <div className='userBtns'>
      <h3>Hi, {name}!</h3>
      <NavLink activeClassName='selected' className='favoritesBtn' to='/favorites'>
        View Favorites
      </NavLink>
      <span> | </span>
      <button onClick={() => handleSignOut()}>
        Sign Out
      </button>
    </div>
  )
}

export default UserAccountBtns;

UserAccountBtns.propTypes = {
  name: PropTypes.string,
  handleSignOut: PropTypes.func
};
