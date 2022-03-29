import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiMoreHorizontal } from "react-icons/fi";

import { removeAnecdoteApi } from "../../../server/actions/anecdote.actions";

import ShowUpdate from './components/showUpdate';

const GetAnecdote = ({ anecdote, user }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showOptions, setShowOptions] = useState(false)
  const [showUpdate, setShowUpdate] = useState(false)

  const hideOptions = () => {
    setShowOptions(!showOptions)
  }

  const redirectProfile = () => {
    navigate(`/profile/${anecdote.userid}`)
  }

  const removeAnecdote = () => {
    dispatch(removeAnecdoteApi(anecdote.id, user.user.token, navigate))
  }

  const hideUpdateAnecdote = () => {
    setShowUpdate(true)
  }

  return (
    <>
      {
        user.isLoggedIn ? (
          <div className="header-get-anecdote">
            <p className="text-header-getanecdote" onClick={redirectProfile}>By: {anecdote.userid}</p>
            {
              user.user.user.id === anecdote.userid ? (
                <>
                  <FiMoreHorizontal className="more-header-getanecdote" onClick={hideOptions} style={showOptions ? {outline: '1px solid #111'} : {}} />
                  <>
                    {
                      showOptions ? (
                        <div className="container-options">
                          <p className="option" onClick={removeAnecdote}>DELETE</p>
                          <p className="option" onClick={hideUpdateAnecdote}>UPDATE</p>
                        </div>
                      ) : (
                        <></>
                      )
                    }
                  </>
                </>
              ) : (
                <></>
              )
            }
          </div>
        ) : (
          <></>
        )
      }
      <h1 className="getanecdote-title">{anecdote.title}</h1>
      <p className="getanecdote-subtitle">{anecdote.subtitle}</p>
      <p className="getanecdote-history">{anecdote.history}</p>
      {
        showUpdate ? (
          <div className="container-update-anecdote">
            <ShowUpdate setShowUpdate={setShowUpdate} anecdote={anecdote} user={user} />
          </div>
        ) : (
          <></>
        )
      }
    </>
  )
}

export default GetAnecdote