import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import { signupAction } from "../../../server/actions/users.actions";

import ErrorRegister from '../../../response/res/errorRegister';

const Signup = ({ showSignUp }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialState = {
    nickname: "",
    email: "",
    password: "",
    confirm: ""
  }

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [userData, setUserData] = useState(initialState)

  const { nickname, email, password, confirm } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value })
  }
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(signupAction(userData, navigate))
  }

  const hidePassword = () => {
    setShowPassword(!showPassword)
  }
  const hideConfirm = () => {
    setShowConfirm(!showConfirm)
  }

  return (
    <>
    <ErrorRegister showSignUp={showSignUp} />
      <div className="order-form">
        <form className="container-form" onSubmit={handleSumbit}>
          <h1 className="title-form">SIGN UP</h1>
          <div className="separator-form">
            <input type="text" name="nickname" className="input-form" placeholder="NICK" value={nickname} onChange={handleChange} />
          </div>
          <div className="separator-form">
            <input type="text" name="email" className="input-form" placeholder="EMAIL" value={email} onChange={handleChange} />
          </div>
          <div className="separator-form">
            <div className="container-password">
              <input type={showPassword ? 'text' : 'password'} name="password" className="input-form" placeholder="PASSWORD" value={password} onChange={handleChange} />
              {
                showPassword ? <AiFillEyeInvisible className="password-icon" onClick={hidePassword} />
                  : <AiFillEye className="password-icon" onClick={hidePassword} />
              }
            </div>
          </div>
          <div className="separator-form">
            <div className="container-password">
              <input type={showConfirm ? 'text' : 'password'} name="confirm" className="input-form" placeholder="CONFIRM PASSWORD" value={confirm} onChange={handleChange} />
              {
                showConfirm ? <AiFillEyeInvisible className="password-icon" onClick={hideConfirm} />
                  : <AiFillEye className="password-icon" onClick={hideConfirm} />
              }
            </div>
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

export default Signup