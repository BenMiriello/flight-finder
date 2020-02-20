export const fetchAndInitializeFlights = () => {
    return (dispatch, getState) => {
        // run fetch to skyscanner API here
    }
}

export const fetchUserTickets = () => {
    return (dispatch, getState) => {
        // run fetch to local API and get the user's tickets
    }
}

export const saveFlightToUserTickets = (flight) => (
    {
        type: "ADD_FAVORITED_FLIGHT_TO_USER",
        payload: flight
    }
)

export const addBookedTicketFlightToUser = (flight) => (
    {
        type: "ADD_BOOKED_TICKET_FLIGHT_TO_USER",
        payload: flight
    }
)

// const loginUser = userObj => ({
//     type: 'LOGIN_USER',
//     payload: userObj
// })

// const loginLogoutFetch = (user, route) => {
//     return dispatch => {
//         return fetch(SLUG + route, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json'
//             },
//             body: JSON.stringify({user})
//         })
//         .then(r => r.json())
//         .then(data => {
//             if (data.error) {
//                 console.log(data.error)
//             } else {
//                 console.log('Signup/login successful. Check localStorage: ', localStorage)
//                 localStorage.setItem("token", data.jwt)
//                 dispatch(loginUser(data.user))
//             }
//         })
//     }
// }

// export const userPostFetch = user => {
//     return loginLogoutFetch(user, 'users')
// }

// export const fetchLoginUser = user => {
//     return loginLogoutFetch(user, 'login')
// }

// export const getProfileFetch = () => {
//     return dispatch => {
//         const token = localStorage.token
//         if (token) {
//             return fetch(SLUG + 'profile', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Accept: 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 }
//             })
//             .then(r => r.json())
//             .then(data => {
//                 if (data.message) {
//                     localStorage.removeItem('token')
//                 } else {
//                     dispatch(loginUser(data.user))
//                 }
//             })
//         }
//     }
// }

// export const logoutUser = () => ({
//     type: 'LOGOUT_USER'
// })

