const initialState = {
    user: {
        username: '',
        bio: '',
        avatar: '',
        favorited_flight_offers: [],
        purchased_flight_offers: []
    },
    token: ""

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {...state, user: action.payload}
        case "LOGOUT_USER":
            return {...state, user: {} }
        case "ADD_FLIGHT_OFFER_TO_FAVORITES":
            // console.log('state.user.favorited_flight_offers: ', state.user.favorited_flight_offers)
            // console.log('action.payload: ', action.payload)
            if (action.payload){
                return {
                    ...state,
                    user: {
                        ...state.user,
                        favorited_flight_offers: [...state.user.favorited_flight_offers, action.payload]
                    }
                }
            }
        case "ADD_FLIGHT_OFFER_TO_PURCHASES":
            // console.log('state.user.favorited_flight_offers: ', state.user.favorited_flight_offers)
            // console.log('action.payload: ', action.payload)
            if (action.payload){
                return {
                    ...state,
                    user: {
                        ...state.user,
                        purchased_flight_offers: [...state.user.purchased_flight_offers, action.payload]
                    }
                }
            }
        default:
            return state
    }
}

export default userReducer

