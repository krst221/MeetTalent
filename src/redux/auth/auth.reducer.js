const INITAL_STATE = {
    user : null,
    token : null, 
    error : false,
    isLoading : false
}

const authReducer = (state = INITAL_STATE, action) => {
    switch(action.type) {
        case "" :
            return state;
        default :
            return state;
    }
}

export default authReducer;