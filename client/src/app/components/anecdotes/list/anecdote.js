import React from 'react'
import { useNavigate } from "react-router-dom";

const Anecdote = ({ anecdote }) => {

  const navigate = useNavigate()

  const redirectAnecdote = () => {
    navigate(`/anecdotes/${anecdote.id}`)
  }

  return (
    <div className="anecdote" onClick={redirectAnecdote}>
        <h1 className="title-anecdote">{anecdote.title}</h1>
        <p className="subtitle-anecdote">{anecdote.subtitle}</p>
        <p>{anecdote.history.length >= 60 ? (
          <p className="history-anecdote">{anecdote.history.substring(0, 60)}<p className="readmore">Read more..</p></p>
        ) : (
          <p className="history-anecdote">{anecdote.history}</p>
        )}</p>
    </div>
  )
}

export default Anecdote