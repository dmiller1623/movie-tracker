import React from 'react';
import { Link } from 'react-router-dom';

const UserAccountBtns = ({ name, handleSignOut }) => {
  return (
    <div>
      <h3>Hi, {name}!</h3>
      <Link to='/favorites'>
        View Favorites
      </Link>
      <button onClick={() => handleSignOut()}>
        Sign Out
      </button>
    </div>
  )
}

export default UserAccountBtns;
