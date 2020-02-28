import { combineReducers } from 'redux'
import userReducer from './userReducer'
import flightsReducer from './flightsReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers(
    {
        userInfo: userReducer,
        searchResults: flightsReducer,
        lastSearchParams: searchReducer
    }
)

export default rootReducer

