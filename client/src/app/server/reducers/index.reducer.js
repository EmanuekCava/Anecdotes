import { combineReducers } from "redux";

import anecdotes from './anecdotes.reducer'
import user from './users.reducer'
import response from './response.reducer'

const reducers = combineReducers({
    anecdotes,
    user,
    response
})

export default reducers

