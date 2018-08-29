import React from 'react'

const signOutBtn = ({ name, handleSignOut}) => {
  return (
    <div>
      <h3>Hi, {name}!</h3>
      <button>
        View Favorites
      </button>
      <button onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  )
}

export default signOutBtn