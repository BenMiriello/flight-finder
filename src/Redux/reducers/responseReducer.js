const initialState = {}

const responseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "MAP_RESPONSE_TO_STATE":
            return { ...payload }
        case "UPDATE_RESPONSE":
            localStorage.setItem("response", payload)
            return {
                ...state,
                resolved: payload.resolved,
                real_flight_offer_count: payload.real_flight_offer_count,
                expected_flight_offer_count: payload.expected_flight_offer_count,
                airports: payload.airports,
                airlines: payload.airlines
            }
        default:
            return state
    }
}

export default responseReducer

