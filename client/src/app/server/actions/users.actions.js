import {  
    AUTH,
    LOGOUT,
    GET_USER,
    UPDATE_USER
} from "../constants/user.const";
import {  
    LOADING,
    ERROR_LOGIN,
    ERROR_REGISTER,
    RESPONSE_PROFILE,
    ERROR_UPDATE_PROFILE
} from "../constants/response.const";

import * as userApi from '../api/user.api'

export const signinAction = (userData, navigate) => async (dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await userApi.singinApi(userData)

        dispatch({
            type: AUTH,
            payload: data
        })

        dispatch({
            type: LOADING,
            payload: false
        })

        navigate('/anecdotes')
        
    } catch (error) {
        dispatch({
            type: ERROR_LOGIN,
            payload: error.response.data.message
        })
    }

}

export const signupAction = (userData, navigate) => async (dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await userApi.signupApi(userData)

        dispatch({
            type: AUTH,
            payload: data
        })

        dispatch({
            type: LOADING,
            payload: false
        })

        navigate('/anecdotes')
        
    } catch (error) {
        dispatch({
            type: ERROR_REGISTER,
            payload: error.response.data.message
        })
    }

}

export const logoutAction = (navigate) => (dispatch) => {

    try {

        dispatch({
            type: LOGOUT,
            payload: {}
        })

        navigate('/')
        
    } catch (error) {
        console.log(error);
    }

}

export const getUserAction = (id, token) => async (dispatch) => {
    
    try {

        const { data } = await userApi.getUser(id, token)

        dispatch({
            type: GET_USER,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}

export const updateProfileAction = (id, userData, token, setShowUpdateProfileMenu) => async (dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await userApi.updateUserApi(id, userData, token)

        dispatch({
            type: UPDATE_USER,
            payload: data.user
        })

        dispatch({
            type: RESPONSE_PROFILE,
            payload: data.message
        })

        setShowUpdateProfileMenu(false)
        
    } catch (error) {
        dispatch({
            type: ERROR_UPDATE_PROFILE,
            payload: error.response.data.message
        })
    }

}