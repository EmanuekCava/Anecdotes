import { 
    ANECDOTES, 
    ANECDOTES_OF_USER, 
    CREATE_ANECDOTE, 
    GET_ANECDOTE,
    MY_ANECDOTES,
    REMOVE_ANECDOTE,
    UPDATE_ANECDOTE
} from "../constants/anecdote.const";
import { 
    ERROR_CREATE,
    ERROR_UPDATE,
    LOADING,
    SUCCESS_ACTION
} from "../constants/response.const";

import * as anecdotesApi from "../api/anecdote.api";

export const anecdotesAction = () => async (dispatch) => {

    try {

        const { data } = await anecdotesApi.anecdotesApi()

        dispatch({
            type: ANECDOTES,
            payload: data.anecdotes
        })

    } catch (error) {
        console.log(error);
    }

}

export const anecdoteAction = (id) => async (dispatch) => {

    try {

        const { data } = await anecdotesApi.anecdoteApi(id)

        dispatch({
            type: GET_ANECDOTE,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}

export const myAnecdotesAction = (token, setAmountOfAnecdotes) => async (dispatch) => {

    try {

        const { data } = await anecdotesApi.myAnecdotesApi(token)

        dispatch({
            type: MY_ANECDOTES,
            payload: data.anecdotes
        })

        setAmountOfAnecdotes(data.amount)
        
    } catch (error) {
        console.log(error);
    }

}

export const userAnecdotesAction = (id, token) => async (dispatch) => {

    try {

        const { data } = await anecdotesApi.anecdotesUserApi(id, token)

        dispatch({
            type: ANECDOTES_OF_USER,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}

export const createAnecdoteAction = (anecdoteData, token, navigate) => async (dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await anecdotesApi.createAnecdoteApi(anecdoteData, token)

        dispatch({
            type: CREATE_ANECDOTE,
            payload: data.anecdote
        })

        dispatch({
            type: SUCCESS_ACTION,
            payload: data.message
        })

        navigate('/myanecdotes')
        
    } catch (error) {
        dispatch({
            type: ERROR_CREATE,
            payload: error.response.data.message
        })
    }

}

export const removeAnecdoteApi = (id, token, navigate) => async (dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await anecdotesApi.removeAnecdoteApi(id, token)

        dispatch({
            type: REMOVE_ANECDOTE,
            payload: id
        })

        dispatch({
            type: SUCCESS_ACTION,
            payload: data.message
        })

        navigate("/myanecdotes")
        
    } catch (error) {
        console.log(error);
    }

}

export const updateAnecdoteAction = (id, anecdoteData, token, navigate) => async (dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await anecdotesApi.updateAnecdoteApi(id, anecdoteData, token)

        dispatch({
            type: UPDATE_ANECDOTE,
            payload: data.anecdote
        })

        dispatch({
            type: SUCCESS_ACTION,
            payload: data.message
        })

        navigate("/myanecdotes")
        
    } catch (error) {
        dispatch({
            type: ERROR_UPDATE,
            payload: error.response.data.message
        })
    }

}