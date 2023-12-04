import { INCREMENT, DECREMENT, RESET } from "../Actions/actionTypes.js";

let initialState = 0;

const counterReducer = (state=initialState, action) => {
    switch(action.type) {
        case INCREMENT: return state + 1;
        case DECREMENT: return state - 1;
        case RESET: return initialState;
        default:  return state;
    }
}

export default counterReducer;


//how to call a  Reducer.
// counterReducer(10, {type: INCREMENT});
// counterReducer(10, {type: DECREMENT});
// counterReducer(10, {type: RESET});
// counterReducer();