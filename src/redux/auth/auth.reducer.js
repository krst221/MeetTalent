import * as actions from './auth.actions';

const INITAL_STATE = {
    user : null,
    token : null, 
    error : false,
    isLoading : false
}

const authReducer = (state = INITAL_STATE, action) => {
    switch(action.type) {
        case actions.LOGIN_USER :
            return {...state, isLoading : true};
        case actions.LOGIN_USER_OK :
            return {...state, isLoading : false, error : false, user : action.payload.user, token : action.payload.token};
        case actions.LOGIN_USER_ERROR :
            return {...state, isLoading : false, error : action.payload};
        case actions.REGISTER_USER :
            return {...state, isLoading : true};
        case actions.REGISTER_USER_OK :
            return {...state, isLoading : false, error : false};
        case actions.REGISTER_USER_ERROR :
            return {...state, isLoading : false, error : action.payload};
        default :
            return state;
    }
}

export default authReducer;