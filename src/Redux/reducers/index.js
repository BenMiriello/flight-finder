import { combineReducers } from 'redux'
import userReducer from './userReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers(
    {
        userInfo: userReducer,
        flights: searchReducer
    }
)

export default rootReducer

