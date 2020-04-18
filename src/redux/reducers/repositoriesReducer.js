import { 
    SEARCH_RESPOSITORIES,
    SUCCESS_SEARCH_RESPOSITORIES, 
    ERROR_SEARCH_RESPOSITORIES
} from '../consts/actionTypes'

const intialState = {
    data: [],
    loading: false,
    error: false
}

const repositories = (state= intialState, action) => {
    switch (action.type) {
        case SEARCH_RESPOSITORIES:
            return {
                ...state,
                loading: true,
                error: false,
                data: [],
            }
        case SUCCESS_SEARCH_RESPOSITORIES:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case ERROR_SEARCH_RESPOSITORIES:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        default:
            return state
    }
}

export default repositories