import { 
    ANECDOTES, 
    ANECDOTES_OF_USER, 
    GET_ANECDOTE,
    MY_ANECDOTES,
    CREATE_ANECDOTE,
    REMOVE_ANECDOTE,
    UPDATE_ANECDOTE
} from "../constants/anecdote.const";

const initialState = {
    anecdotes: [],
    anecdote: {},
    myAnecdotes: [],
    userAnecdotes: {}
}

const anecdoteReducer = (state = initialState, action) => {

    switch (action.type) {
        case ANECDOTES:
            return {
                ...state,
                anecdotes: action.payload,
                anecdote: {},
                myAnecdotes: [],
                userAnecdotes: {}
            }

        case GET_ANECDOTE:
            return {
                ...state,
                anecdotes: [],
                anecdote: action.payload,
                myAnecdotes: [],
                userAnecdotes: {}
            }

        case MY_ANECDOTES:
            return {
                ...state,
                anecdotes: [],
                anecdote: {},
                myAnecdotes: action.payload,
                userAnecdotes: {}
            }

        case ANECDOTES_OF_USER:
            return {
                ...state,
                anecdotes: [],
                anecdote: {},
                myAnecdotes: [],
                userAnecdotes: action.payload
            }

        case CREATE_ANECDOTE:
            return {
                ...state,
                anecdotes: [...state.anecdotes, action.payload],
                anecdote: {},
                myAnecdotes: [],
                userAnecdotes: {}
            }

        case REMOVE_ANECDOTE:
            return {
                ...state,
                anecdotes: [...state.anecdotes.filter(anecdote => anecdote.id !== action.payload)],
                anecdote: {},
                myAnecdotes: [],
                userAnecdotes: {}
            }

        case UPDATE_ANECDOTE:
            return {
                ...state,
                anecdotes: [...state.anecdotes.map(anecdote => anecdote.id === action.payload.id ? action.payload : anecdote)],
                anecdote: {},
                myAnecdotes: [],
                userAnecdotes: {}
            }

        default:
            return state;
    }

}

export default anecdoteReducer