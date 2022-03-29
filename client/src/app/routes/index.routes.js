import React from 'react'

import Image from '../components/index/image'
import Start from '../components/index/start'

const Index = ({ showSignIn, showSignUp, setShowSignUp }) => {
  return (
    <div className="container-index">
        <Image />
        <Start showSignIn={showSignIn} showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
    </div>
  )
}

export default Index