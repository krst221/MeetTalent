import axios from 'axios'

export const APIHeaders = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Authorization' : {
        toString () {
            return `Bearer ${localStorage.getItem('token')}`
        }
    } 
};

export const API = axios.create({
    baseURL : 'https://meettalent.herokuapp.com/',
    timeout: 6000,
    headers : APIHeaders
});
