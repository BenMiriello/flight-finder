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
            if (data.error) {
                console.log(data.error)
            } else {
                console.log('Signup/login successful. Check localStorage: ', localStorage)
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

export const userPostFetch = user => {
    return loginSignupFetch(user, 'users')
}

export const fetchLoginUser = user => {
    return loginSignupFetch(user, 'login')
}

export const getProfileFetch = () => {
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
                if (data.message) {
                    localStorage.removeItem('token')
                } else {
                    dispatch(loginUser(data.user))
                }
            })
        }
    }
}

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})

