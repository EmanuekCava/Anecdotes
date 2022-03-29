import React from 'react'
import { useSelector } from "react-redux";

import Error from '../message/error'
import Loading from '../message/loading';

const ErrorCreate = () => {

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
              response.errorCreate && <Error msg={response.errorCreate} />
          }
      </div>
    </>
  )
}

export default ErrorCreate