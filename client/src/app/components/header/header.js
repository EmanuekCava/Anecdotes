import React from 'react'

import Logo from './components/logo'
import Navigation from './components/navigation'

const Header = ({ setShowSignIn, showSignIn, setShowSignUp, showSignUp }) => {
  return (
    <div className="container-header">
      <Logo setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp} />
      <Navigation setShowSignIn={setShowSignIn} showSignIn={showSignIn} setShowSignUp={setShowSignUp} showSignUp={showSignUp} />
    </div>
  )
}

export default Header