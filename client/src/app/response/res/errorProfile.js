import React from 'react'
import { useSelector } from "react-redux";

import Error from '../message/error'
import Loading from '../message/loading';

const ErrorProfile = () => {

    const { response } = useSelector(state => state)

  return (
    <>
      <div> 
        {
          response.loading && <Loading />
        }
      </div>
      <div className="error-create">
          {
              response.errorProfile && <Error msg={response.errorProfile} />
          }
      </div>
    </>
  )
}

export default ErrorProfile