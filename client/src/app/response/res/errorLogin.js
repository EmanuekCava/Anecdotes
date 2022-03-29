import React from 'react'
import { useSelector } from "react-redux";

import Error from '../message/error'
import Loading from '../message/loading';

const ErrorLogin = ({ showSignIn }) => {

    const { response } = useSelector(state => state)

  return (
    <>
      <div>
        {
          response.loading && <Loading showSignIn={showSignIn} />
        }
      </div>
      <div className="error-login">
          {
              response.errorLogin && <Error msg={response.errorLogin} />
          }
      </div>
    </>
  )
}

export default ErrorLogin