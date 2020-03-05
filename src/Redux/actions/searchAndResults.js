const BASE = 'http://localhost:3000/api/v1/'

export const searchForFlights = searchParams => {
    let token = ""
    if (localStorage.token) {
        token = localStorage.token
    }
    return dispatch => {
        return fetch(BASE + 'queries/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({searchParams})
        })
        .then(r => r.json())
        .then(qandr => {
            console.log(qandr)
            if (qandr.status === 500){
                dispatch(handleErrorResponse(qandr))
            } else {
                dispatch(mapQueryToState(qandr.query))
                dispatch(mapResponseToState(qandr.response))
                if (qandr.response?.flight_offers) {
                    dispatch(mapSearchResultsToState(qandr.response?.flight_offers))
                }
            }
        })
        .catch(console.log)
    }
}

export const queryTestFlights = searchParams => {
    let token = ""
    if (localStorage.token) {
        token = localStorage.token
    }
    return dispatch => {
        return fetch(BASE + 'queries/initiate_test', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({searchParams})
        })
        .then(r => r.json())
        .then(qandr => {
            console.log(qandr)
            if (qandr.status === 500){
                dispatch(handleErrorResponse(qandr))
            } else {
                dispatch(mapQueryToState(qandr.query))
                dispatch(mapResponseToState(qandr.response))
                if (qandr.response?.flight_offers) {
                    dispatch(mapSearchResultsToState(qandr.response?.flight_offers))
                }
            }
        })
        .catch(console.log)
    }
}

export const refreshResponse = (response) => {
    return dispatch => {
        if (response.id){
            return fetch(BASE + 'responses/' + response.id)
            .then(r => r.json())
            .then(updatedResponse => {
                // debugger
                dispatch(updateResponse(updatedResponse))
                dispatch(mapSearchResultsToState(updatedResponse.flight_offers))
            })
            .catch(console.log)
        } else {
            console.log("There's no response. Make a search first.")
            return
        }
    }
}

const mapSearchResultsToState = flight_offers => ({
    type: "MAP_SEARCH_RESULTS_TO_STATE",
    payload: flight_offers
})

const mapQueryToState = queryObj => ({
    type: "MAP_QUERY_TO_STATE",
    payload: queryObj
})


const mapResponseToState = responseObj => ({
    type: "MAP_RESPONSE_TO_STATE",
    payload: responseObj
})

const updateResponse = responseObj => ({
    type: "UPDATE_RESPONSE",
    payload: responseObj
})

const handleErrorResponse = (errors) => ({
    type: "ERROR_RESPONSE",
    payload: errors
})

export const clearErrors = () => ({
    type: "CLEAR_ERRORS"
})

export const loadLastQuery = user => {
    // return dispatch => {
    //     return fetch(BASE + 'users/' + user.id + '/queries/last')
    // }
}

