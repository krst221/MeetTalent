import { API } from "../../shared/services/services";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_OK = "LOGIN_USER_OK";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_OK = "REGISTER_USER_OK";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const GET_USERS = "GET_USERS";
export const GET_USERS_OK = "GET_USERS_OK";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const GET_USER_ID = "GET_USER_ID";
export const GET_USER_ID_OK = "GET_USER_ID_OK";
export const GET_USER_ID_ERROR = "GET_USER_ID_ERROR";
export const REGISTER_COMPANY = "REGISTER_COMPANY";
export const REGISTER_COMPANY_OK = "REGISTER_COMPANY_OK";
export const REGISTER_COMPANY_ERROR = "REGISTER_COMPANY_ERROR";
export const CHECK_COMPANY = "CHECK_COMPANY";
export const CHECK_COMPANY_OK = "CHECK_COMPANY_OK";
export const CHECK_COMPANY_ERROR = "CHECK_COMPANY_ERROR";
export const REGISTER_OFFER = "REGISTER_OFFER";
export const REGISTER_OFFER_OK = "REGISTER_OFFER_OK";
export const REGISTER_OFFER_ERROR = "REGISTER_OFFER_ERROR";
export const VERIFY_MAIL = "VERIFY_MAIL";
export const VERIFY_MAIL_OK = "VERIFY_MAIL_OK";
export const VERIFY_MAIL_ERROR = "VERIFY_MAIL_ERROR";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CHANGE_PASSWORD_OK = "CHANGE_PASSWORD_OK";
export const CHANGE_PASSWORD_ERROR = "CHANGE_PASSWORD_ERROR";
export const MODIFY_USER_VALUE = "MODIFY_USER_VALUE";
export const MODIFY_USER_VALUE_OK = "MODIFY_USER_VALUE_OK";
export const MODIFY_USER_VALUE_ERROR = "MODIFY_USER_VALUE_ERROR";
export const MODIFY_ARRAY_VALUE = "MODIFY_ARRAY_VALUE";
export const MODIFY_ARRAY_VALUE_OK = "MODIFY_ARRAY_VALUE_OK";
export const MODIFY_ARRAY_VALUE_ERROR = "MODIFY_ARRAY_VALUE_ERROR";
export const GET_OFFERS = "GET_OFFERS";
export const GET_OFFERS_OK = "GET_OFFERS_OK";
export const GET_OFFERS_ERROR = "GET_OFFERS_ERROR";
export const GET_COMPANY = "GET_COMPANY";
export const GET_COMPANY_OK = "GET_COMPANY_OK";
export const GET_COMPANY_ERROR = "GET_COMPANY_ERROR";
export const CLOSE_OFFER = "CLOSE_OFFER";
export const CLOSE_OFFER_OK = "CLOSE_OFFER_OK";
export const CLOSE_OFFER_ERROR = "CLOSE_OFFER_ERROR";

export const loginUser = (formdata, navigate) => async(dispatch) => {
    dispatch({type: "LOGIN_USER"})
    try {
        const result = await API.post("user/login", formdata)
        localStorage.setItem('token', result.data.token)
        localStorage.setItem('user', JSON.stringify(result.data.user))
        dispatch({type: "LOGIN_USER_OK", payload: result.data})
        if(localStorage.getItem('user')) {
            navigate('/user/profile/');
            navigate(0);
        }
    } catch (error) {
        dispatch({type: "LOGIN_USER_ERROR",  payload : error.message})
    }
}

export const registerUser = (formdata, navigate) => async(dispatch) => {
    dispatch({type: "REGISTER_USER"})
    try {    
        await API.post("user/register", formdata)
        dispatch({type: "REGISTER_USER_OK"})
        navigate('/login')
    } catch (error) {  
        dispatch({type: "REGISTER_USER_ERROR"})
    }
}

export const getAllUsers = () => async(dispatch) => {
    dispatch({type: "GET_USERS"})
    try {    
        const res = await API.get("user/all")
        dispatch({type: "GET_USERS_OK"})
        localStorage.setItem('users', JSON.stringify(res.data));
    } catch (error) {  
        dispatch({type: "GET_USERS_ERROR"})
    }
}

export const getLocalUser = (id) => async(dispatch) => {
    dispatch({type: "GET_USER"})
    try {    
        const res = await API.post("user/getUser", {'id': id})
        dispatch({type: "GET_USER_OK"})
        localStorage.setItem('user', JSON.stringify(res.data));
    } catch (error) {  
        dispatch({type: "GET_USER_ERROR"})
    }
}

export const getUserById = (id, navigate) => async(dispatch) => {
    dispatch({type: "GET_USER_ID"})
    try {    
        const res = await API.post("user/getUser", {'id': id})
        dispatch({type: "GET_USER_ID_OK"})
        localStorage.setItem('userid', JSON.stringify(res.data));
        navigate(`/user/candidates/${id}`)
    } catch (error) {  
        dispatch({type: "GET_USER_ID_ERROR"})
    }
}

export const modifyUserValue = (formData) => async(dispatch) => {
    dispatch({type: "MODIFY_USER_VALUE"})
    try {    
        await API.put("user/editValue", formData);
        dispatch({type: "MODIFY_USER_VALUE_OK"})
    } catch (error) {  
        dispatch({type: "MODIFY_USER_VALUE_ERROR"})
    }
}

export const modifyUserArray = (formData) => async(dispatch) => {
    dispatch({type: "MODIFY_USER_ARRAY"})
    try {    
        await API.put("user/editArray", formData);
        dispatch({type: "MODIFY_USER_ARRAY_OK"})
    } catch (error) {  
        dispatch({type: "MODIFY_USER_ARRAY_ERROR"})
    }
}

export const deleteArrayElement = (newUser) => async(dispatch) => {
    dispatch({type: "MODIFY_USER_ARRAY"})
    try {    
        await API.put("user/edit", newUser);
        dispatch({type: "MODIFY_USER_ARRAY_OK"})
    } catch (error) {  
        dispatch({type: "MODIFY_USER_ARRAY_ERROR"})
    }
}

export const registerCompany = (formdata, navigate) => async(dispatch) => {
    dispatch({type: "REGISTER_COMPANY"})
    try {
        await API.post("company/register", formdata)
        dispatch({type: "REGISTER_COMPANY_OK"})
        navigate('/login')
    } catch (error) {
        dispatch({type: "REGISTER_COMPANY_ERROR"})
    }
}

export const verifyMail = (formdata, navigate) => async(dispatch) => {
    dispatch({type: "VERIFY_MAIL"})
    try {
        await API.post("user/mail", formdata)
        localStorage.setItem('verify', 'true')
        localStorage.setItem('email', formdata.email)
        dispatch({type: "VERIFY_MAIL_OK"})
        if(localStorage.getItem('verify') === 'true'){
            navigate('/login/recover');
            navigate(0);
        }
    } catch (error) {
        dispatch({type: "VERIFY_MAIL_ERROR"})
    }
}

export const changePassword = (formdata, navigate) => async(dispatch) => {
    dispatch({type: "CHANGE_PASSWORD"})
    try {
        await API.put("user/change", formdata)
        localStorage.setItem('verify', false)
        localStorage.setItem('email', null)
        dispatch({type: "CHANGE_PASSWORD_OK"})
        navigate('/login')
    } catch (error) {  
        dispatch({type: "CHANGE_PASSWORD_ERROR"})

    }
}

export const registerOffer = (formdata, navigate) => async(dispatch) => {
    dispatch({type: "REGISTER_OFFER"})
    try {    
        await API.post("offer/add", formdata)
        dispatch({type: "REGISTER_OFFER_OK"})
        navigate('/user/create');
    } catch (error) {  
        dispatch({type: "REGISTER_OFFER_ERROR"})
    }
}

export const joinOffer = (data, navigate) => async(dispatch) => {
    dispatch({type: "REGISTER_OFFER"})
    try {    
        await API.post("user/join", data)
        dispatch({type: "REGISTER_OFFER_OK"})
        navigate('/user/profile');
        navigate(0);
    } catch (error) {  
        dispatch({type: "REGISTER_OFFER_ERROR"})
    }
}

export const closeOffer = (id, navigate) => async(dispatch) => {
    dispatch({type: "CLOSE_OFFER"})
    try {    
        await API.put("offer/close", id)
        dispatch({type: "CLOSE_OFFER_OK"})
        await dispatch(getOffers());
        navigate('/user/offers');
        navigate(0);
    } catch (error) {  
        dispatch({type: "CLOSE_OFFER_ERROR"})
    }
}

export const getOffers = () => async(dispatch) => {
    dispatch({type: "GET_OFFERS"})
    try {  
        const res = await API.get("offer/getAll")
        localStorage.setItem('offers', JSON.stringify(res.data));
        dispatch({type: "GET_OFFERS_OK"})
    } catch (error) {  
        dispatch({type: "GET_OFFERS_ERROR"})
    }
}

export const checkCompany = (user, navigate) => async(dispatch) => {
    dispatch({type: "CHECK_COMPANY"})
    try {  
        const res = await API.post("company/get/id", user)
        localStorage.setItem('isCompany', res.data);
        dispatch({type: "CHECK_COMPANY_OK"})
    } catch (error) {  
        dispatch({type: "CHECK_COMPANY_ERROR"})
    }
}

export const getCompany = (offer) => async(dispatch) => {
    dispatch({type: "GET_COMPANY"})
    try {  
        const res = await API.post("company/get", offer)
        localStorage.setItem('company', res.data);
        dispatch({type: "GET_COMPANY_OK"})
    } catch (error) {  
        dispatch({type: "GET_COMPANY_ERROR"})
    }
}