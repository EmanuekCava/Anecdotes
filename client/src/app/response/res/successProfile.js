import React from 'react'
import { useSelector } from "react-redux";

import Loading from '../message/loading'
import Success from '../message/success';

const SuccessProfile = () => {

    const { response } = useSelector(state => state)

  return (
    <div>
        {
            response.loading && <Loading />
        }
        {
            response.responseProfile && <Success msg={response.responseProfile} /> 
        }
    </div>
  )
}

export default SuccessProfile