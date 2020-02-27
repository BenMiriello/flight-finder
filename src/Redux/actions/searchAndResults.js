export const searchForFlights = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/flight_offers')
        .then(r => r.json())
        .then(flightOffersArray => dispatch(mapSearchResultsToState(flightOffersArray)))
    }
}

const mapSearchResultsToState = (flightOffersArray) => {
    return ({
        type: 'MAP_SEARCH_RESULTS_TO_STATE',
        payload: flightOffersArray
    })
}

export const queryAmadeusFlightOffersSearch = (queryParams) => {
    return ({
        type: 'QUERY_AMADEUS_FLIGHT_OFFERS_SEARCH',
        payload: queryParams
    })
}