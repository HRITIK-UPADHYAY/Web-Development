import { POST_FETCHING, POST_FETCH_SUCCESS, POST_FETCH_ERROR } from "../actions/actionTypes";

let initialState = {
    loading: false,
    data: [],
    error: null
}

const postReducer = (state=initialState, actions) => {
    switch(actions.type) {
        case POST_FETCHING: return {...state, loading: true};

        case POST_FETCH_SUCCESS: return ({...state, loading: false, data: actions.payload, error: null});

        case POST_FETCH_ERROR: return ({...state, loading: false, data: [], error: actions.payload});

        default: return state;
    }
}

export default postReducer;