import React from 'react'
import { useSelector } from "react-redux";

import Loading from '../message/loading'
import Success from '../message/success';

const SuccessAction = () => {

    const { response } = useSelector(state => state)

  return (
    <div>
        {
            response.loading && <Loading />
        }
        {
            response.successAction && <Success msg={response.successAction} /> 
        }
    </div>
  )
}

export default SuccessAction