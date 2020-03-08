const initialState = []

const flightOffersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MAP_SEARCH_RESULTS_TO_STATE":
            if (action.payload[0]){
                return action.payload
            } return state
        case "LOGOUT_CLEAR_FLIGHT_OFFERS":
            return initialState
        default:
            return state
    }
}

export default flightOffersReducer

