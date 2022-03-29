import {  
    AUTH,
    LOGOUT,
    GET_USER,
    UPDATE_USER
} from "../constants/user.const";

const initialState = {
    user: {},
    isLoggedIn: false,
    getUser: {}
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                getUser: {}
            }

        case LOGOUT:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: false,
                getUser: {}
            }
        
        case GET_USER:
            return {
                ...state,
                getUser: action.payload
            }

        case UPDATE_USER:
            return {
                ...state,
                getUser: action.payload
            }

        default:
            return state;
    }

}

export default authReducer