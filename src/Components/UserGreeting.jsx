import React from 'react'

function UserGreeting() {
    const isLoggedIn=true
  return (
    <div>WELCOME {isLoggedIn && 'Wishwas'}</div>
  )
}

export default UserGreeting