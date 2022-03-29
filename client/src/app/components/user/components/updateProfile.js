import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import { updateProfileAction } from "../../../server/actions/users.actions";

import ErrorProfile from '../../../response/res/errorUpdate';

const UpdateProfile = ({ setShowUpdateProfileMenu, user, userGot }) => {

    const dispatch = useDispatch()

    const initialValue = {
        nickname: userGot.nickname,
        state: userGot.state
    }

    const [userData, setUserData] = useState(initialValue)

    const { nickname, state } = userData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({...userData, [name]: value})
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(updateProfileAction(userGot.id, userData, user.user.token, setShowUpdateProfileMenu))
    }

    return (
        <div className="container-update-profile">
            <ErrorProfile />
            <form className="container-form" style={{ width: '100%', height: '100%', marginTop: '40px' }} onSubmit={handleSumbit}>
                <h1 className="title-form">UPDATE YOUR PROFILE</h1>
                <div className="separator-form">
                    <input type="text" name="nickname" className="input-form" placeholder="NICK NAME" value={nickname} onChange={handleChange} autoComplete="off" />
                </div>
                <div className="separator-form">
                    <textarea name="state" className="textarea-form" placeholder="WRITE YOUR CURRENT STATE" style={{ resize: 'none' }} value={state} onChange={handleChange} />
                </div>
                <div className="separator-form">
                    <button className="button-form">
                        UPDATE
                    </button>
                </div>
                <div className="separator-form">
                    <button className="button-form-cancel" onClick={() => setShowUpdateProfileMenu(false)}>
                        CANCEL
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile