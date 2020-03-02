import { combineReducers } from 'redux'
import userReducer from './userReducer'
import flightOffersReducer from './flightOffersReducer'
import searchReducer from './searchReducer'
import queryReducer from './queryReducer'
import responseReducer from './responseReducer'

const rootReducer = combineReducers(
    {
        userInfo: userReducer,
        searchResults: flightOffersReducer,
        lastSearchParams: searchReducer,
        query: queryReducer,
        response: responseReducer
    }
)

export default rootReducer

