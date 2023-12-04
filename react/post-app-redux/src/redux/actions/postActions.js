import { POST_FETCHING, POST_FETCH_SUCCESS, POST_FETCH_ERROR } from "./actionTypes";
import axios from "axios";

// let initialState = {
//     loading: false,
//     data: [],
//     error: null
// }


export const post_fetching = () => {
    return {
        type: POST_FETCHING
    }
}

export const post_fetch_success = (data) => {
    return {
        type: POST_FETCH_SUCCESS,
        payload: data
    }
}

export const post_fetch_error = (error) => {
    return {
        type: POST_FETCH_ERROR,
        payload: error
    }
}

export const fetchPost = () => {
    return async function(dispatch) {
        try {
            dispatch(post_fetching());
            const response = await axios.get("https://gauravgitacc.github.io/postAppData/posts.json");
            dispatch(post_fetch_success(response.json));
        }
        catch(error) {
            dispatch(post_fetch_error(error.message));
        }
    }
}


