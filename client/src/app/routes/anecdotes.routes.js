import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { anecdotesAction } from "../server/actions/anecdote.actions";

import Anecdote from '../components/anecdotes/list/anecdote';
import NavigationList from '../components/anecdotes/list/components/navigationList'

const Anecdotes = () => {

  const { anecdotes, user } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(anecdotesAction())
  }, [dispatch])


  return (
    <div className="order-anecdotes">
      {
        user.isLoggedIn ? (
          <div className="anecdotes-navigation">
            <NavigationList />
          </div>
        ) : (
          <></>
        )
      }
      <div className="container-anecdotes">
        {
          anecdotes.anecdotes.map((anecdote) => {
            return <Anecdote anecdote={anecdote} key={anecdote.id} />
          })
        }
      </div>
    </div>
  )
}

export default Anecdotes
