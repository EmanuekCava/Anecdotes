import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StartComp = ({ setShowSignUp }) => {

    const { user } = useSelector(state => state)

    const navigate = useNavigate()

    const redirectAnecdotes = () => {
        navigate('anecdotes')
    }
    const redirectCreateAnecdote = () => {
        if(user.isLoggedIn) {
            navigate('share')
        } else {
            setShowSignUp(true)
        }
    }

    return (
        <>
            <div className="separator-start">
                <h1 className="text-start">ARE YOU READY TO READ?</h1>
            </div>
            <div className="separator-start">
                <button className="button-start" onClick={redirectAnecdotes}>EXPLORE</button>
            </div>
            <div className="separator-start">
                <h1 className="text-start">SHARE AN ANECDOTE</h1>
            </div>
            <div className="separator-start">
                <button className="button-start" onClick={redirectCreateAnecdote} >START</button>
            </div>
        </>
    )
}

export default StartComp