import { POST_REQUEST_START, POST_SUCCESS_DATA, POST_FAILURE_DATA } from "./actionTypes";
import axios from "axios";

export const postRequestStart = () => {
    return {
        type: POST_REQUEST_START,
    }
}

export const postSuccessData = (data) => {
    return {
        type: POST_SUCCESS_DATA,
        payload: data
    }
}

export const postFailureData = (error) => {
    return {
        type: POST_FAILURE_DATA,
        payload: error
    }
}


//this dispatch is given by thunk internally while calling that return fuction.
export const postRequest = () => {
    return (dispatch) => {
        dispatch(postRequestStart());
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then(response => dispatch(postSuccessData(response.data)))
        .catch(err => dispatch(postFailureData(err)))
    }
}