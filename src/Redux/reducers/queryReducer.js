const initialState = {}

const queryReducer = (state = initialState, { action, payload }) => {
    switch (action) {
        case "MAP_QUERY_TO_STATE":
            return {
                show: true,
                ...payload
            }
        default:
            return state
    }
}

export default queryReducer

