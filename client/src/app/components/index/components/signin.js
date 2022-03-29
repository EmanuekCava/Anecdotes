import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signinAction } from "../../../server/actions/users.actions";

import ErrorLogin from '../../../response/res/errorLogin'

const Signin = ({ showSignIn }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialState = {
        email: "",
        password: ""
    }

    const [userData, setUserData] = useState(initialState)

    const { email, password } = userData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(signinAction(userData, navigate))
    }

    return (
        <>
            <ErrorLogin showSignIn={showSignIn} />
            <div className="order-form">
                <form className="container-form" onSubmit={handleSumbit}>
                    <h1 className="title-form">SIGN IN</h1>
                    <div className="separator-form">
                        <input type="text" name="email" className="input-form" placeholder="EMAIL" value={email} onChange={handleChange} />
                    </div>
                    <div className="separator-form">
                        <input type="password" name="password" className="input-form" placeholder="PASSWORD" value={password} onChange={handleChange} />
                    </div>
                    <div className="separator-form">
                        <button className="button-form">
                            ACCEPT
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signin