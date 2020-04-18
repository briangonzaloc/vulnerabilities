import { put, takeLatest} from 'redux-saga/effects'

import {
    ERROR_SEARCH_RESPOSITORIES,
    SUCCESS_SEARCH_RESPOSITORIES,
    SEARCH_RESPOSITORIES
} from '../consts/actionTypes'

import { API } from '../../utils/ManagerAPI'


function* fetch(action){
    const URL = 'repositories'

    try{
        let params = action.payload
        let querystring = ''
        if( params.vulnerability ){
            querystring = `?vulnerability_id=${params.vulnerability}`
        }
        let data = yield API.fetchAll(URL+querystring)
        yield put({type: SUCCESS_SEARCH_RESPOSITORIES, payload: data.result})

    }catch(error){
        yield put({type: ERROR_SEARCH_RESPOSITORIES, payload: 'Error al cargar los repositorios'})
    }
}

export default function* fetchListWatcher(){
    yield takeLatest(SEARCH_RESPOSITORIES, fetch)
}