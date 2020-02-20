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

// // replaced with loginUser action
// export const saveUserToState = (userInfo) => {
//     return {
//         type: "SAVE_USER_TO_STATE",
//         payload: userInfo
//     }
// }

export const saveFlightToUserTickets = (flight) => {
    return {
        type: "ADD_FAVORITED_FLIGHT_TO_USER",
        payload: flight
    }
}

export const addBookedTicketFlightToUser = (flight) => {
    return {
        type: "ADD_BOOKED_TICKET_FLIGHT_TO_USER",
        payload: flight
    }
}

export const userPostFetch = user => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        .then(data => {
            // debugger
            if (data.error) {
                console.log(data.error)
            } else {
                console.log('User creation successful. Check localStorage: ', localStorage)
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

export const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

