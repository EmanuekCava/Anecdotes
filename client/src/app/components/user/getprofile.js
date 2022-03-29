import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AnecdotesProfile from './components/anecdotesProfile'
import UpdateProfile from './components/updateProfile';

import SuccessProfile from '../../response/res/successProfile';
import ErrorProfile from '../../response/res/errorProfile'

const GetProfile = ({ userGot, anecdotes, id }) => {

  const { user } = useSelector(state => state)

  const navigate = useNavigate()

  const [showAnecdotes, setShowAnecdotes] = useState(false)
  const [showUpdateProfileMenu, setShowUpdateProfileMenu] = useState(false)

  const redirectPrivateAnecdotes = () => {
    if (user.user.user.id === userGot.id) {
      navigate('/myanecdotes')
    } else {
      setShowAnecdotes(true)
    }
  }

  const showUpdateProfile = () => {
    setShowUpdateProfileMenu(true)
  }

  return (
    <div className="profile">
      <SuccessProfile />
      <div className="container-data-profile">
        <h1 className="profile-nickname">{userGot.nickname}</h1>
        <p className="profile-anecdotes" onClick={redirectPrivateAnecdotes}>Anecdotes: {anecdotes.amount}</p>
      </div>
      {
        showAnecdotes ? (
          <div className="container-anecdotes-user">
            <AnecdotesProfile setShowAnecdotes={setShowAnecdotes} anecdotes={anecdotes} />
          </div>
        ) : (
          <></>
        )
      }
      <div className="container-data-profile">
        <p className="profile-state">{userGot.state}</p>
        {
          user.user.user.id == id ? (
            <button className="button-update-profile" onClick={showUpdateProfile}>EDIT PROFILE</button>
          ) : (
            <></>
          )
        }
        {
          showUpdateProfileMenu ? (
            <div className="container-anecdotes-user">
              <ErrorProfile />
              <UpdateProfile setShowUpdateProfileMenu={setShowUpdateProfileMenu} user={user} userGot={userGot} />
            </div>
          ) : (
            <></>
          )
        }
      </div>
    </div>
  )
}

export default GetProfile