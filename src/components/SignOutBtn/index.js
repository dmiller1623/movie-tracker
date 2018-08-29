import React from 'react'

const signOutBtn = ({ logUserOut }) => {
  return (
    <button onClick={logUserOut}>
      Sign Out
    </button>
  )
}

export default signOutBtn