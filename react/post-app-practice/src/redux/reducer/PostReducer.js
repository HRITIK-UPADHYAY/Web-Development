import { POST_REQUEST_START, POST_SUCCESS_DATA, POST_FAILURE_DATA } from "../actions/actionTypes";

let initialState = {
    loading: false,
    data: [],
    error: null
}

const postReducer = (state=initialState, actions) => {
    switch(actions.type) {
        case POST_REQUEST_START: return {...state, loading: true};
        case POST_SUCCESS_DATA: return {...state, loading: false, data: actions.payload, error: null};
        case POST_FAILURE_DATA: return {...state, loading: false, data: [], error: actions.payload};
        default: return state;
    }
}

export default postReducer;