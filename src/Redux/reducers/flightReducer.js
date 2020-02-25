const initialState = {
    searchResults: []
}

const flightReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case "MAP_SEARCH_RESULTS_TO_STATE":
            return {searchResults: [...action.payload]}
        default:
            return state
    }
}

export default flightReducer

// type: 'MAP_SEARCH_RESULTS_TO_STATE',
// payload: flightOffersArray

