const initialState = {}

const queryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "MAP_QUERY_TO_STATE":
            localStorage.setItem("query", payload)
            return { ...payload }
        case "LOGOUT_CLEAR_QUERY":
            return initialState
        default:
            return state
    }
}

export default queryReducer

