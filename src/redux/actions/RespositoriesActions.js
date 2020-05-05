import { SEARCH_RESPOSITORIES } from '../consts/actionTypes'

export const searchRespositories = (dispatch, params) => dispatch({type: SEARCH_RESPOSITORIES, payload: params})