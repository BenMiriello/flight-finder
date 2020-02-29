BASE = 'http://localhost:3000/api/v1/'

export const queryTestFlights = searchParams => {
    return dispatch => {
        return fetch(BASE + 'queries/test')
        .then(r => r.json())
        .then(queryAndResponse => dispatch(mapQueryToState(queryAndResponse.query)))
        .then(queryAndResponse => dispatch(mapResponseToState(queryAndResponse.response)))
        .catch(console.log)
    }
}

export const refreshResponse = response => {
    return dispatch => {
        return fetch(BASE + 'responses/' + response.id)
        .then(r => r.json())
        .then(response => dispatch(mapResponseToState(response)))
        .catch(console.log)
    }
}

const mapQueryToState = queryObj => {
    return ({
        type: "MAP_QUERY_TO_STATE",
        payload: queryObj
    })
}

const mapResponseToState = responseObj => {
    return ({
        type: "MAP_RESPONSE_TO_STATE",
        payload: responseObj
    })
}

export const searchForFlights = searchParams => {
    // return dispatch => {
    //     return fetch(BASE + 'queries', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: {
    //             searchParams: JSON.stringify(searchParams)
    //         }
    //     })
    //     .then(r => r.json())
    //     .then(flightOffersArray => dispatch(mapSearchResultsToState(flightOffersArray)))
    //     .then(dispatch(setLastSearchParams(searchParams)))
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }
}

// export const getResponseFlights = response_id =>{
//     return dispatch => {
//         return fetch(BASE + '/responses/' + response_id)
//         .then(r => r.json())
//         .then(flightOffersArray => dispatch(mapSearchResultsToState(flightOffersArray)))
//         // .then(dispatch(setLastSearchParams(searchParams)))
//         .catch(console.log)
//     }
// }

// const mapSearchResultsToState = flightOffersArray => {
//     return ({
//         type: 'MAP_SEARCH_RESULTS_TO_STATE',
//         payload: flightOffersArray
//     })
// }

// const setLastSearchParams = searchParams => {
//     return ({
//         type: "SET_LAST_SEARCH_PARAMS",
//         payload: searchParams
//     })
// }

