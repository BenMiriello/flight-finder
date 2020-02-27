import { combineReducers } from 'redux'
import userReducer from './userReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers(
    {
        userInfo: userReducer,
        searchResults: searchReducer
    }
)

export default rootReducer

