import {createStore} from "redux";
import counterReducer from "./Reducer/counterReducer.js";


const store = createStore(counterReducer);

export default store;


//1st time only = x = counterReducer();
// x is stored inside store = 0;

//dispatch(increment())
//dispatch({type: INCREMENT}) -> 2nd time call.
//x = counterReducer(state, {type: INCREMENT}).
//this x=2 is stored inside store.