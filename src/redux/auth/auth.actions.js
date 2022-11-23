export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_OK = "LOGIN_USER_OK";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const loginUser = () => (dispatch) => {
    dispatch({type: "LOGIN_USER"})
    try {
        
        dispatch({type: "LOGIN_USER_OK"})
    } catch (error) {
        
        dispatch({type: "LOGIN_USER_ERROR"})
    }
}
