const SERVER_URL = "http://127.0.0.1:3001"

const getRequestOptions = ( method='GET', params = {} ) => {
    
    let options = {
        method : method,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
             //Authorization: `${getAuthToken()}`
        }
    }
    if( Object.keys(params).length ){
        options.body = JSON.stringify(params)
    }
    return options
}

const APIrequest = (endpoint, options) => {
    return new Promise( (resolve, reject) => {
        fetch(endpoint, options)
        .then( result  => {
            resolve(result)
        })
        .catch( error => {
            reject(error)
        })
    });
}

const callAPI = async (endpoint, options = {} ) => {
    const URL = `${SERVER_URL}/${endpoint}` 
    let result = null
    let error = false
    let metadata = null

    try{

        let response = await APIrequest(URL, options)
        result = await response.json()

    }catch( error) {
        throw error
    } 

    if ( error ){
        throw error
    }else{
        return { result, metadata }
    }
    
}

const APIFetchAll = async(endpoint) => {
    try{
        let options = getRequestOptions()
        const data = await callAPI(endpoint, options)
        return data
    }catch(error){
        throw error
    }
}

export const API = {
    fetchAll : APIFetchAll,
}