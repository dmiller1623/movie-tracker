import React from 'react'
import { Link } from 'react-router-dom';

const UserAccountBtns = ({ name, signOutUser}) => {
  return (
    <div>
      <h3>Hi, {name}!</h3>
      <Link to='/favorites'>
        View Favorites
      </Link>
      <button onClick={() => {
        signOutUser()
      }}>
        Sign Out
      </button>
    </div>
  )
}

export default UserAccountBtns;