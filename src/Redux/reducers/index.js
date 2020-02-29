import { combineReducers } from 'redux'
import userReducer from './userReducer'
import searchResultsReducer from './searchResultsReducer'
import searchReducer from './searchReducer'
import responseReducer from './responseReducer'
import queryReducer from './queryReducer'
import responseReducer from './responseReducer'

const rootReducer = combineReducers(
    {
        userInfo: userReducer,
        searchResults: searchResultsReducer,
        lastSearchParams: searchReducer,
        query: queryReducer,
        responses: responseReducer
    }
)

export default rootReducer

