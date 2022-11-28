import * as actions from './auth.actions';

const INITAL_STATE = {
    user : null,
    userid: null,
    users: null,
    token : null, 
    error : false,
    isLoading : false,
    isCompany: false,
    verify: false,
    email: null,
    offers: null,
    company: null

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
        case actions.GET_USERS :
            return {...state, isLoading : true};
        case actions.GET_USERS_OK :
            return {...state, isLoading : false, error : false, users : action.payload};
        case actions.GET_USERS_ERROR :
            return {...state, isLoading : false, error : action.payload};
        case actions.GET_USER_ID :
            return {...state, isLoading : true};
        case actions.GET_USER_ID_OK :
            return {...state, isLoading : false, error : false, userid : action.payload};
        case actions.GET_USER_ID_ERROR :
            return {...state, isLoading : false, error : action.payload};
        case actions.REGISTER_COMPANY :
            return {...state, isLoading : true};
        case actions.REGISTER_COMPANY_OK :
            return {...state, isLoading : false, error : false};
        case actions.REGISTER_COMPANY_ERROR :
            return {...state, isLoading : false, error : action.payload};
        case actions.CHECK_COMPANY :
            return {...state, isLoading : true};
        case actions.CHECK_COMPANY_OK :
            return {...state, isLoading : false, error : false};
        case actions.CHECK_COMPANY_ERROR :
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
        case actions.GET_OFFERS :
            return {...state, isLoading : true};
        case actions.GET_OFFERS_OK :
            return {...state, isLoading : false, error : false, offers : action.payload};
        case actions.GET_OFFERS_ERROR :
            return {...state, isLoading : false, error : action.payload};
        case actions.GET_COMPANY :
            return {...state, isLoading : true};
        case actions.GET_COMPANY_OK :
            return {...state, isLoading : false, error : false, company : action.payload};
        case actions.GET_COMPANY_ERROR :
            return {...state, isLoading : false, error : action.payload};
        case actions.CLOSE_OFFER :
            return {...state, isLoading : true};
        case actions.CLOSE_OFFER_OK :
            return {...state, isLoading : false, error : false};
        case actions.CLOSE_OFFER_ERROR :
            return {...state, isLoading : false, error : action.payload};
        default :
            return state;
    }
}

export default authReducer;