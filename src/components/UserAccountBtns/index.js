import React from 'react'

const signOutBtn = ({ name, signOutUser}) => {
  return (
    <div>
      <h3>Hi, {name}!</h3>
      <button>
        View Favorites
      </button>
      <button onClick={() => {
        signOutUser()
      }}>
        Sign Out
      </button>
    </div>
  )
}

export default signOutBtn