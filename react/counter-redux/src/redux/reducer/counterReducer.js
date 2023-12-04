import { DECREMENT, INCREMENT, RESET } from "../actions/actionTypes";
import { increment, decrement, reset } from "../actions/counterActions";

const initialState = 0;

const counterReducer = (state=initialState, actions) => {

    switch(actions.type) {
        case INCREMENT: return state+1
        case DECREMENT: return state-1
        case RESET: return initialState
        default: return state;
    }
}


export default counterReducer;