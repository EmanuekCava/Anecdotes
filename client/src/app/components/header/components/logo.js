import React from 'react'
import { useNavigate } from "react-router-dom";

const Logo = ({ setShowSignIn, setShowSignUp }) => {

  const navigate = useNavigate()

  const index = () => {
    setShowSignIn(false)
    setShowSignUp(false)
    navigate('')
  }

  return (
    <div className="container-logo" onClick={index}>
        <img src="ghost.jpg" alt="logo-anecdotes" className="image-header"/>
        <h1 className="text-header">ANECDOTES</h1>
    </div>
  )
}

export default Logo