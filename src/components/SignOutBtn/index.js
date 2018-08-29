import React from 'react'

const signOutBtn = ({ handleSignOut}) => {
  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  )
}

export default signOutBtn