const initialState = []

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MAP_SEARCH_RESULTS_TO_STATE":
            if (action.payload[0]){
                return action.payload
            } return state
        case "QUERY_AMADEUS_FLIGHT_OFFERS_SEARCH":
            console.log('u hit the QUERY_AMADEUS_FLIGHT_OFFERS_SEARCH reducer case. queryParams in payload are: ', action.payload)
            break
        default:
            return state
    }
}

export default flightReducer

