import * as actions from './auth.actions';

const INITAL_STATE = {
    user : null,
    token : null, 
    error : false,
    isLoading : false,
    verify: false,
    email: null

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
        case actions.REGISTER_COMPANY :
            return {...state, isLoading : true};
        case actions.REGISTER_COMPANY_OK :
            return {...state, isLoading : false, error : false};
        case actions.REGISTER_COMPANY_ERROR :
            return {...state, isLoading : false, error : action.payload};
        case actions.REGISTER_OFFER :
            return {...state, isLoading : true};
        case actions.REGISTER_OFFER_OK :
            return {...state, isLoading : false, error : false};
        case actions.REGISTER_OFFER_ERROR :
            return {...state, isLoading : false, error : action.payload};
        case actions.VERIFY_MAIL :
            return {...state, isLoading : true};
        case actions.VERIFY_MAIL_OK :
            return {...state, isLoading : false, error : false, verify: true};
        case actions.VERIFY_MAIL_ERROR :
            return {...state, isLoading : false, error : action.payload};
        case actions.CHANGE_PASSWORD :
            return {...state, isLoading : true};
        case actions.CHANGE_PASSWORD_OK :
            return {...state, isLoading : false, error : false, verify: false};
        case actions.CHANGE_PASSWORD_ERROR :
            return {...state, isLoading : false, error : action.payload};
        case actions.MODIFY_USER_VALUE :
            return {...state, isLoading : true};
        case actions.MODIFY_USER_VALUE_OK :
            return {...state, isLoading : false, error : false, user : action.payload};
        case actions.MODIFY_USER_VALUE_ERROR :
            return {...state, isLoading : false, error : action.payload};
        case actions.MODIFY_ARRAY_VALUE :
            return {...state, isLoading : true};
        case actions.MODIFY_ARRAY_VALUE_OK :
            return {...state, isLoading : false, error : false, user : action.payload};
        case actions.MODIFY_ARRAY_VALUE_ERROR :
            return {...state, isLoading : false, error : action.payload};
        default :
            return state;
    }
}

export default authReducer;