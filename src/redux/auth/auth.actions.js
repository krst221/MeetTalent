import { API } from "../../shared/services/services";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_OK = "LOGIN_USER_OK";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_OK = "REGISTER_USER_OK";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const REGISTER_COMPANY = "REGISTER_COMPANY";
export const REGISTER_COMPANY_OK = "REGISTER_COMPANY_OK";
export const REGISTER_COMPANY_ERROR = "REGISTER_COMPANY_ERROR";
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

export const loginUser = (formdata, navigate) => async(dispatch) => {
    dispatch({type: "LOGIN_USER"})
    try {
        const result = await API.post("user/login", formdata)
        localStorage.setItem('token', result.data.token)
        localStorage.setItem('user', JSON.stringify(result.data.user))
        dispatch({type: "LOGIN_USER_OK", payload: result.data})
        console.log('logeao');
        navigate('/user/profile/detail/')
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
        localStorage.setItem('verify', true)
        localStorage.setItem('email', formdata.email)
        dispatch({type: "VERIFY_MAIL_OK"})
        const verify = localStorage.getItem('verify');
        if(verify === 'true') navigate('/login/recover')
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
        navigate('/login')
    } catch (error) {  
        dispatch({type: "REGISTER_OFFER_ERROR"})
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