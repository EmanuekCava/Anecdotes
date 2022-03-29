import React from 'react'
import { useSelector } from "react-redux";

import Error from '../message/error'
import Loading from '../message/loading';

const ErrorUpdate = () => {

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
              response.errorUpdate && <Error msg={response.errorUpdate} />
          }
      </div>
    </>
  )
}

export default ErrorUpdate