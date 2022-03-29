import React from 'react'
import { useSelector } from "react-redux";

import Error from '../message/error'
import Loading from '../message/loading';

const ErrorRegister = ({ showSignUp }) => {

    const { response } = useSelector(state => state)

    return (
        <>
            <div>
                {
                    response.loading && <Loading showSignUp={showSignUp} />
                }
            </div>
            <div className="error-register">
                {
                    response.errorRegister && <Error msg={response.errorRegister} />
                }
            </div>
        </>
    )
}

export default ErrorRegister