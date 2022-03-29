import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createAnecdoteAction } from "../../../server/actions/anecdote.actions";

const CreateForm = () => {

    const { user } = useSelector(state => state)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialState = {
        title: "",
        subtitle: "",
        history: ""
    }

    const [anecdoteData, setAnecdoteData] = useState(initialState)

    const { title, subtitle, history } = anecdoteData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnecdoteData({ ...anecdoteData, [name]: value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(createAnecdoteAction(anecdoteData, user.user.token, navigate))
    }

    return (
        <div className="container-share">
            <form className="container-form" style={{ width: '680px' }} onSubmit={handleSumbit}>
                <h1 className="title-form">SHARE AN ANECDOTE</h1>
                <div className="separator-form">
                    <input type="text" name="title" className="input-form" placeholder="TITLE" value={title} onChange={handleChange} autoComplete="off" />
                </div>
                <div className="separator-form">
                    <input type="text" name="subtitle" className="input-form" placeholder="SUBTITLE (no compulsory)" value={subtitle} onChange={handleChange} autoComplete="off" />
                </div>
                <div className="separator-form">
                    <textarea name="history" className="textarea-form" placeholder="HISTORY" style={{ resize: 'none' }} value={history} onChange={handleChange} />
                </div>
                <div className="separator-form">
                    <button className="button-form">
                        SHARE
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateForm