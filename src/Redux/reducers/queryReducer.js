const initialState = {}

const queryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "MAP_QUERY_TO_STATE":
            return { ...payload }
        default:
            return state
    }
}

export default queryReducer

