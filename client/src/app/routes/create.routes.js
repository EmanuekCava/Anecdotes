import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CreateForm from '../components/anecdotes/form/createForm'
import NavigationList from '../components/anecdotes/list/components/navigationList'
import ErrorCreate from '../response/res/errorCreate';

const CreateAnecdote = () => {

  const { user } = useSelector(state => state)

  return (
    <div className="container-create-anecdote">
      {
        user.isLoggedIn ? (
          <div className="order-anecdotes">
            <div className="anecdotes-navigation">
              <NavigationList />
            </div>
            <ErrorCreate />
            <div className="container-anecdotes">
              <CreateForm />
            </div>
          </div>
        ) : (
          <Navigate to="/" />
        )
      }
    </div>
  )
}

export default CreateAnecdote