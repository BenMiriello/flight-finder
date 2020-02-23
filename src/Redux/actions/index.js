// export const fetchAndInitializeFlights = () => {
//     return (dispatch, getState) => {
//         // run fetch to skyscanner API here
//     }
// }

// export const fetchUserTickets = () => {
//     return (dispatch, getState) => {
//         // run fetch to local API and get the user's tickets
//     }
// }

export const addFlightOfferToPurchases = (flight) => (
    {
        type: "ADD_FLIGHT_OFFER_TO_PURCHASES",
        payload: flight
    }
)

export const addFlightOfferToFavorites = (flight) => (
    {
        type: "ADD_FLIGHT_OFFER_TO_FAVORITES",
        payload: flight
    }
)

