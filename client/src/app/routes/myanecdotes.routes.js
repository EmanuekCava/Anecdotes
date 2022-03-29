import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { myAnecdotesAction } from "../server/actions/anecdote.actions";

import MyAnecdotesList from '../components/anecdotes/list/myanecdotes'
import NavigationList from '../components/anecdotes/list/components/navigationList'
import SuccessAction from '../response/res/successAction';

const MyAnecdotes = () => {

  const { user, anecdotes } = useSelector(state => state)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [amountOfAnecdotes, setAmountOfAnecdotes] = useState(null)

  const redirectCreateAnecdote = () => {
    navigate('/share')
  }

  useEffect(() => {
    dispatch(myAnecdotesAction(user.user.token, setAmountOfAnecdotes))
  }, [dispatch, user.user.token])

  return (
    <div className="order-anecdotes">
      {
        user.isLoggedIn ? (
          <>
            <div className="anecdotes-navigation">
              <NavigationList />
            </div>
            <SuccessAction />
            {
              amountOfAnecdotes === 0 ? (
                <div className="container-any-anecdote">
                  <p className="text-any-anecdote">You haven't anecdotes. Share one!</p>
                  <button className="button-any-anecdote" onClick={redirectCreateAnecdote}>SHARE</button>
                </div>
              ) : (
                <div className="container-anecdotes">
                  {
                    anecdotes.myAnecdotes.map((anecdote) => {
                      return <MyAnecdotesList anecdote={anecdote} key={anecdote.id} />
                    })
                  }
                </div>
              )
            }
          </>
        ) : (
          <Navigate to="/" />
        )
      }
    </div>
  )
}

export default MyAnecdotes