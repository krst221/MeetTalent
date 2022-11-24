import { API } from "../../shared/services/services";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_OK = "LOGIN_USER_OK";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_OK = "REGISTER_USER_OK";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";


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
        
        const result = await API.post("user/register", formdata)
        dispatch({type: "REGISTER_USER_OK"})
        navigate('/login')

    } catch (error) {
        
        dispatch({type: "REGISTER_USER_ERROR"})
    }
}