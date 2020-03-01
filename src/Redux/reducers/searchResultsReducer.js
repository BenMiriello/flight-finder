const initialState = []

const searchResultsReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case "MAP_SEARCH_RESULTS_TO_STATE":
            if (action.payload[0]){
                return action.payload
            } return state
        default:
            return state
    }
}

export default searchResultsReducer

