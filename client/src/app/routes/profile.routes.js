import React, { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserAction, logoutAction } from "../server/actions/users.actions";
import { userAnecdotesAction } from "../server/actions/anecdote.actions";

import GetProfile from '../components/user/getprofile'

const Profile = () => {

  const { user, anecdotes } = useSelector(state => state)

  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()

  const logout = () => {
    dispatch(logoutAction(navigate))
  }

  useEffect(() => {
    dispatch(getUserAction(params.id, user.user.token))
    dispatch(userAnecdotesAction(params.id, user.user.token))
  }, [dispatch, params.id, user.user.token])

  return (
    <div className="container-profile">
      {
        user.user.user.id == params.id ? (
          <>
            <button className="button-logout" onClick={logout}>LOGOUT</button>
          </>
        ) : (
          <></>
        )
      }
      <GetProfile userGot={user.getUser} anecdotes={anecdotes.userAnecdotes} id={params.id} />
    </div>
  )
}

export default Profile