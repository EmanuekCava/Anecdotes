import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { anecdoteAction } from "../server/actions/anecdote.actions";

import GetAnecdote from '../components/anecdotes/list/getAnecdote'

const Anecdote = () => {

    const { anecdotes, user } = useSelector(state => state)

    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(anecdoteAction(params.id))
    }, [dispatch, params.id])
    

  return (
    <div className="container-anecdote">
        <GetAnecdote anecdote={anecdotes.anecdote} user={user} />
    </div>
  )
}

export default Anecdote