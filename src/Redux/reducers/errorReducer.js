const initialState = []

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ERROR_RESPONSE":
            let error = 'Unknown'
            if (action.payload.status_code){
                error = action.payload.status_code
            } 
            return [`Unable to show any flights at the moment. ${error} error.`]
        case "CLEAR_ERRORS":
            return []
        default:
            return state
    }
}

export default errorReducer

