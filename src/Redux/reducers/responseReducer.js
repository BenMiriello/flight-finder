const initialState = {}

const responseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "MAP_RESPONSE_TO_STATE":
            return { ...payload }
        case "UPDATE_RESPONSE":
            return {
                ...state,
                resolved: payload.resolved
            }
        default:
            return state
    }
}

export default responseReducer

