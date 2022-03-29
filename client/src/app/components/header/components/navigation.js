import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = ({ setShowSignIn, showSignIn, setShowSignUp, showSignUp }) => {

  const { user } = useSelector(state => state)

  const navigate = useNavigate()
  const location = useLocation()

  const redirectProfile = () => {
    navigate(`/profile/${user.user.user.id}`)
  }

  const singin = () => {
    setShowSignIn(!showSignIn)
    setShowSignUp(false)
    navigate('/')
  }
  const signup = () => {
    setShowSignUp(!showSignUp)
    setShowSignIn(false)
    navigate('/')
  }

  return (
    <div className="container-navigation">
      {
        user.isLoggedIn ? (
          <>
            <p className="text-navigation-profile" onClick={redirectProfile}
             style={location.pathname === `/profile/${user.user.user.id}` ? {background: '#fff', color: '#111', fontWeight: 700, borderRadius: '25%'} : {}}>MY PROFILE</p>
          </>
        ) : (
          <>
            <p className="text-navigation-signin" onClick={singin}
              style={showSignIn ? { background: '#fff', color: '#111', fontWeight: 700, borderRadius: '25%' } : {}}>SIGN IN</p>
            <p className="text-navigation-signup" onClick={signup}
              style={showSignUp ? { background: '#fff', color: '#111', fontWeight: 700, borderRadius: '25%' } : {}}>SIGN UP</p>
          </>
        )
      }
    </div>
  )
}

export default Navigation