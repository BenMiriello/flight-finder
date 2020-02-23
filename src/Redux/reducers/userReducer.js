const initialState = {
    user: {
        username: '',
        bio: '',
        avatar: '',
        favorited_flight_offers: [],
        favorited_flight_offers: []
    },
    token: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {...state, user: action.payload}
        case "LOGOUT_USER":
            return {...state, user: {} }
        // case "ADD_FAVORITED_FLIGHT_TO_USER":
        //     return {
        //         ...state,
        //         user: {
        //             ...state.user,
        //             favorited_flights: [...state.user.favorited_flights, action.payload]
        //         }
        //     }
        // case "ADD_TICKET_TO_USER":
        //     return {
        //         ...state,
        //         user: {
        //             ...state.user,
        //             tickets: [...state.user.tickets, action.payload]
        //         }
        //     }
        default:
            return state
    }
}

export default userReducer