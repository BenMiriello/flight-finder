export const getStaticFlights = (searchParams) => {
    // debugger
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/flight_offers')
        .then(r => r.json())
        .then(flightOffersArray => dispatch(mapSearchResultsToState(flightOffersArray)))
        .then(dispatch(setLastSearchParams(searchParams)))
        .catch(err => {
            console.log(err)
        })
    }
}

const mapSearchResultsToState = (flightOffersArray) => {
    return ({
        type: 'MAP_SEARCH_RESULTS_TO_STATE',
        payload: flightOffersArray
    })
}

const setLastSearchParams = searchParams => {
    return ({
        type: "SET_LAST_SEARCH_PARAMS",
        payload: searchParams
    })
}

export const searchForFlights = searchParams => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/flight_offers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(searchParams)
        })
        .then(r => r.json())
        .then(flightOffersArray => dispatch(mapSearchResultsToState(flightOffersArray)))
        .then(dispatch(setLastSearchParams(searchParams)))
        .catch(err => {
            console.log(err)
        })
    }
}

