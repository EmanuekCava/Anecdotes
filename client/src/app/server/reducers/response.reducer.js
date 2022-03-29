import {
    ERROR_LOGIN,
    ERROR_REGISTER,
    LOADING,
    RESPONSE_PROFILE,
    SUCCESS_ACTION,
    ERROR_CREATE,
    ERROR_UPDATE_PROFILE,
    ERROR_UPDATE
} from "../constants/response.const";

const initialState = {
    loading: false,
    errorLogin: null,
    errorRegister: null,
    responseProfile: null,
    successAction: null,
    errorCreate: null,
    errorProfile: null,
    errorUpdate: null
}

const responseReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload,
                errorLogin: null,
                errorRegister: null,
                responseProfile: null,
                successAction: null,
                errorCreate: null,
                errorProfile: null,
                errorUpdate: null
            }

        case ERROR_LOGIN:
            return {
                ...state,
                loading: false,
                errorLogin: action.payload,
                errorRegister: null,
                responseProfile: null,
                successAction: null,
                errorCreate: null,
                errorProfile: null,
                errorUpdate: null
            }

        case ERROR_REGISTER:
            return {
                ...state,
                loading: false,
                errorLogin: null,
                errorRegister: action.payload,
                responseProfile: null,
                successAction: null,
                errorCreate: null,
                errorProfile: null,
                errorUpdate: null
            }

        case RESPONSE_PROFILE:
            return {
                ...state,
                loading: false,
                errorLogin: null,
                errorRegister: null,
                responseProfile: action.payload,
                successAction: null,
                errorCreate: null,
                errorProfile: null,
                errorUpdate: null
            }

        case SUCCESS_ACTION:
            return {
                ...state,
                loading: false,
                errorLogin: null,
                errorRegister: null,
                responseProfile: null,
                successAction: action.payload,
                errorCreate: null,
                errorProfile: null,
                errorUpdate: null
            }

        case ERROR_CREATE:
            return {
                ...state,
                loading: false,
                errorLogin: null,
                errorRegister: null,
                responseProfile: null,
                successAction: null,
                errorCreate: action.payload,
                errorProfile: null,
                errorUpdate: null
            }

        case ERROR_UPDATE_PROFILE:
            return {
                ...state,
                loading: false,
                errorLogin: null,
                errorRegister: null,
                responseProfile: null,
                successAction: null,
                errorCreate: null,
                errorProfile: action.payload,
                errorUpdate: null
            }

        case ERROR_UPDATE:
            return {
                ...state,
                loading: false,
                errorLogin: null,
                errorRegister: null,
                responseProfile: null,
                successAction: null,
                errorCreate: null,
                errorProfile: null,
                errorUpdate: action.payload
            }

        default:
            return state;
    }

}

export default responseReducer