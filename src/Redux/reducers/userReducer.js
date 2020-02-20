const initialState = {
    user: {
        name: '',
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
            return {...state, currentUser: action.payload}
        // case "SAVE_USER_TO_STATE":
        //     return {...state, user: action.payload.user, token: action.payload.token}
        case "ADD_FAVORITED_FLIGHT_TO_USER":
            return {
                ...state,
                user: {
                    ...state.user,
                    favorited_flights: [...state.user.favorited_flights, action.payload]
                }
            }
        case "ADD_TICKET_TO_USER":
            return {
                ...state,
                user: {
                    ...state.user,
                    tickets: [...state.user.tickets, action.payload]
                }
            }
            default:
                return state
    }
}

export default userReducer