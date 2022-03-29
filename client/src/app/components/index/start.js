import React from 'react'
import { useSelector } from "react-redux";

import StartComp from './components/startComp'
import Signin from './components/signin'
import Signup from './components/signup'

const Start = ({ showSignIn, showSignUp, setShowSignUp }) => {

    const { response } = useSelector(state => state)

    return (
        <div className="container-start" style={!response.loading ? {position: 'relative'} : {}}>
            <div className="order-start" 
            style={showSignIn ? {top: 'calc(50% - 135.5px)'} :
            showSignUp ? {top: "calc(50% - 191.5px)"} : {top: 'calc(50% - 109px)'}}>
                {
                    !showSignUp && !showSignIn ? <StartComp setShowSignUp={setShowSignUp} /> : <></>
                }
                {
                    showSignIn && <Signin showSignIn={showSignIn} />
                }
                {
                    showSignUp && <Signup showSignUp={showSignUp} />
                }
            </div>
        </div>
    )
}

export default Start