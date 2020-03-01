const initialState = {}

const queryReducer = (state = initialState, { type, payload }) => {
    // debugger
    switch (type) {
        case "MAP_QUERY_TO_STATE":
            // debugger
            return {
                // show: true,
                ...payload
            }
        default:
            return state
    }
}

export default queryReducer

