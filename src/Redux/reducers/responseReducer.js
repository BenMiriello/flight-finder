const initialState = {}

const responseReducer = (state = initialState, { action, payload }) => {
    switch (action) {
        case "MAP_RESPONSE_TO_STATE":
            return {
                show: true,
                ...payload
            }
        default:
            return state
    }
}

export default responseReducer

