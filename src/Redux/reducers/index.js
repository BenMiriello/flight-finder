import { combineReducers } from 'redux'
import userReducer from './userReducer'
import searchResultsReducer from './searchResultsReducer'
import searchReducer from './searchReducer'
import queryReducer from './queryReducer'
import responseReducer from './responseReducer'

const rootReducer = combineReducers(
    {
        userInfo: userReducer,
        searchResults: searchResultsReducer,
        lastSearchParams: searchReducer,
        query: queryReducer,
        response: responseReducer
    }
)

export default rootReducer

