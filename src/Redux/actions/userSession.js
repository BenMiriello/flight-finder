const SLUG = 'http://localhost:3000/api/v1/'

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

const loginSignupFetch = (user, route) => {
    return dispatch => {
        return fetch(SLUG + route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        .then(data => {
            if (data.message) {
                console.log(data.message)
            } else {
                // debugger
                localStorage.setItem("token", data.jwt)
                localStorage.setItem("username", data.user.username)
                dispatch(loginUser(data.user))
            }
        })
    }
}







// IN USER PROFILE FETCH, SET USER QUERIES TO STATE








export const persistUser = user => {
    return loginSignupFetch(user, 'users')
}

export const loginUserToDB = user => {
    return loginSignupFetch(user, 'login')
}

export const getProfileFetch = () => {
    // debugger
    return dispatch => {
        const token = localStorage.token
        if (token) {
            return fetch(SLUG + 'profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(r => r.json())
            .then(data => {
                // debugger
                if (data.message) {
                    localStorage.removeItem('token')
                    if (localStorage.username){
                        localStorage.removeItem('username')
                    }
                } else {
                    dispatch(loginUser(data.user))
                }
            })
        }
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch(clearUserFromState())
        dispatch(logoutClearQuery())
        dispatch(logoutClearResponse())
        dispatch(logoutClearSearch())
        dispatch(logoutClearFlightOffers())
    }
}

const clearUserFromState = () => ({
    type: 'LOGOUT_USER'
})

const logoutClearQuery = () => ({
    type: "LOGOUT_CLEAR_QUERY"
})

const logoutClearResponse = () => ({
    type: "LOGOUT_CLEAR_RESPONSE"
})

const logoutClearSearch = () => ({
    type: "LOGOUT_CLEAR_SEARCH"
})

const logoutClearFlightOffers = () => ({
    type: "LOGOUT_CLEAR_FLIGHT_OFFERS"
})

const slapNewUsername = newUsername => ({
    type: 'CHANGE_USERNAME',
    payload: newUsername
})

export const changeUsername = (userInfo) => {

    const userId = userInfo.userId
    const newUsername = userInfo.newUsername
    return dispatch => {
        const token = localStorage.token
        if (token) {
            return fetch(SLUG + `users/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newUsername)
            })
            .then(r => r.json())
            .then(data => {
                dispatch(slapNewUsername(data.newUsername))
            })
        }
    }
}

const clearUserAction = () => ({
    type: 'CLEAR_USER'
  });

export const deleteUserFromDB = userId => dispatch => {
    fetch(`http://localhost:3000/api/v1/users${userId}`, {
            method: 'DELETE'
        })
    .then(r => {
        dispatch(clearUserAction())
        localStorage.clear()
    })
}

