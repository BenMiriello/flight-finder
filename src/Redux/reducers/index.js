import { combineReducers } from 'redux'
import userReducer from './userReducer'
import flightReducer from './flightReducer'

const rootReducer = combineReducers(
    {
        userInfo: userReducer,
        flights: flightReducer
    }
)

export default rootReducer