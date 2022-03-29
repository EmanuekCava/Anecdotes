import React from 'react'

const Loading = ({ showSignUp, showSignIn }) => {

  return (
    <div className="container-loading" style={showSignUp ? {top: '-61px' } : showSignIn ? {top: '-117px'} : {top: '76px'}} >
        <img src="loading.gif" alt="Loading" className="loading"/>
    </div>
  )
}

export default Loading