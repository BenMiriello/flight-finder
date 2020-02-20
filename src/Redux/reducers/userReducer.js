const initialState = {
    user: {
        username: '',
        bio: '',
        avatar: '',
        favorited_flights: [],
        tickets: []
    },
    token: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {...state, user: action.payload}
        // case "LOGIN_USER":
        //     return {...state, user: action.payload.user, token: action.payload.token}
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