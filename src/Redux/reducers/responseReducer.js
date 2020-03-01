const initialState = {}

const responseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "MAP_RESPONSE_TO_STATE":
            return payload
            // return {
            //     // show: true,
            //     ...payload
            // }
        default:
            return state
    }
}

export default responseReducer

