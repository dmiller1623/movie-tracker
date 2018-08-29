import React from 'react'

const signOutBtn = ({ name, signOutUser, handleSubmit}) => {
  return (
    <div>
      <h3>Hi, {name}!</h3>
      <button>
        View Favorites
      </button>
      <button onClick={() => {
        signOutUser()
        handleSubmit('signOut')
      }}>
        Sign Out
      </button>
    </div>
  )
}

export default signOutBtn