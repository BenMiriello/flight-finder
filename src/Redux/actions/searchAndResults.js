const BASE = 'http://localhost:3000/api/v1/'

export const queryTestFlights = searchParams => {
    return dispatch => {
        return fetch(BASE + 'queries/initiate_test', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({searchParams})
        })
        .then(r => r.json())
        .then(qandr => {
            dispatch(mapQueryToState(qandr.query))
            dispatch(mapResponseToState(qandr.response))
        })
        .catch(console.log)
    }
}

export const refreshResponse = response => {
    // debugger
    return dispatch => {
        if (response.id){
            return fetch(BASE + 'responses/' + response.id)
            .then(r => r.json())
            .then(response => {
                // console.log(response)
                // debugger
                dispatch(mapResponseToState(response))
                dispatch(mapSearchResultsToState(response.flight_offers))
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

export const searchForFlights = searchParams => {
    // debugger
    return dispatch => {
        return fetch(BASE + 'queries/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({searchParams})
        })
        .then(r => r.json())
        .then(qandr => {
            dispatch(mapQueryToState(qandr.query))
            dispatch(mapResponseToState(qandr.response))
        })
        .catch(console.log)
    }
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

