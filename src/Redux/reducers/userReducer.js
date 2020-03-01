const initialState = {
    user: {
        id: '',
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
            debugger
            return {...state, user: action.payload}
        case "LOGOUT_USER":
            return {...state, user: {} }
        case "CHANGE_USERNAME":
            return {
                ...state,
                user: {
                    ...state.user,
                    username: action.payload
                }
            }
        case "ADD_FLIGHT_OFFER_TO_FAVORITES":
            if (action.payload){
                return {
                    ...state,
                    user: {
                        ...state.user,
                        favorited_flight_offers: [...state.user.favorited_flight_offers, action.payload]
                    }
                }
            } break
        case "ADD_FLIGHT_OFFER_TO_PURCHASES":
            if (action.payload){
                return {
                    ...state,
                    user: {
                        ...state.user,
                        purchased_flight_offers: [...state.user.purchased_flight_offers, action.payload]
                    }
                }
            } break
        case "REMOVE_FLIGHT_OFFER_FROM_PURCHASES":
            if (action.payload){
                let purchased_flight_offers = state.user.purchased_flight_offers.filter(flightOffer => {
                        return flightOffer.id !== action.payload.id;
                    });
                return {
                    ...state,
                    user: {
                        ...state.user,
                        purchased_flight_offers: [...purchased_flight_offers]
                    }
                }
            } break
            case "REMOVE_FLIGHT_OFFER_FROM_FAVORITES":
                if (action.payload){
                    let favorited_flight_offers = state.user.favorited_flight_offers.filter(flightOffer => {
                            return flightOffer.id !== action.payload.id;
                        });
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            favorited_flight_offers: [...favorited_flight_offers]
                        }
                    }
                } break
        default:
            return state
    }
}

export default userReducer

