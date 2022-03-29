import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

import Anecdote from '../../anecdotes/list/anecdote'

const AnecdotesProfile = ({ setShowAnecdotes, anecdotes }) => {

    const closeShowAnecdotes = () => {
        setShowAnecdotes(false)
    }

  return (
    <div className="container-anecdotes-profile">
        <AiOutlineClose className="close-anecdotes-profile" onClick={closeShowAnecdotes} />
        <div className="container-anecdotes-profile">
            {
                anecdotes.anecdotes.map((anecdote) => {
                    return <Anecdote anecdote={anecdote} key={anecdote.id} />
                })
            }
        </div>
    </div>
  )
}

export default AnecdotesProfile