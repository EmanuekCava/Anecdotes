import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { updateAnecdoteAction } from "../../../../server/actions/anecdote.actions";

import ErrorUpdate from '../../../../response/res/errorUpdate';

const ShowUpdate = ({ setShowUpdate, anecdote, user }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialState = {
        title: anecdote.title,
        subtitle: anecdote.subtitle,
        history: anecdote.history
    }

    const [anecdoteData, setAnecdoteData] = useState(initialState)

    const { title, subtitle, history } = anecdoteData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnecdoteData({...anecdoteData, [name]: value})
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(updateAnecdoteAction(anecdote.id, anecdoteData, user.user.token, navigate))
    }

    return (
        <div className="container-form-update">
            <ErrorUpdate />
            <form className="container-form" style={{ width: '100%', height: '100%'}} onSubmit={handleSumbit}>
                <h1 className="title-form">UPDATE AN ANECDOTE</h1>
                <div className="separator-form">
                    <input type="text" name="title" className="input-form" placeholder="TITLE" value={title} onChange={handleChange} autoComplete="off" />
                </div>
                <div className="separator-form">
                    <input type="text" name="subtitle" className="input-form" placeholder="SUBTITLE (no compulsory)" value={subtitle} onChange={handleChange} autoComplete="off" />
                </div>
                <div className="separator-form">
                    <textarea name="history" className="textarea-form" placeholder="HISTORY" style={{ resize: 'none' }} value={history} onChange={handleChange}/>
                </div>
                <div className="separator-form">
                    <button className="button-form">
                        UPDATE
                    </button>
                </div>
                <div className="separator-form">
                    <button className="button-form-cancel" onClick={() => setShowUpdate(false)}>
                        CANCEL
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ShowUpdate