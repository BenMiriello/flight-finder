const initialState = {
    show: false,
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LAST_SEARCH_PARAMS":
            // debugger
            return {
                show: true,
                ...action.payload
            }
        default:
            return state
    }
}

export default searchReducer

