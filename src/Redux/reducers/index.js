import { combineReducers } from 'redux'
import userReducer from './userReducer'
import flightQueryReducer from './flightQueryReducer'

const rootReducer = combineReducers(
    {
        userInfo: userReducer,
        flights: flightQueryReducer
    }
)

export default rootReducer

