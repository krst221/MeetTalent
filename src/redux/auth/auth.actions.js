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



export const loginUser = (formdata, navigate) => async(dispatch) => {
    dispatch({type: "LOGIN_USER"})
    try {
        
        const result = await API.post("user/login", formdata)
        localStorage.setItem('token', result.data.token)
        localStorage.setItem('user', JSON.stringify(result.data.user))
        dispatch({type: "LOGIN_USER_OK", payload: result.data})
        navigate('/')

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


export const registerCompany = (formdata, navigate) => async(dispatch) => {
    dispatch({type: "REGISTER_COMPANY"})
    try {
        
        const result = await API.post("company/register", formdata)
        dispatch({type: "REGISTER_COMPANY_OK"})

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