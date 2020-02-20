const initialState = {
    ALL: []
}

const flightReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "INITIALIZE FLIGHTS":
            return {...state, all: payload}
        default:
            return state
    }
}

