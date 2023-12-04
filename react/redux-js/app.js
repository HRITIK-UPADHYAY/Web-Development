import store from "./Redux/store.js";
import { increment, decrement, reset } from "./Redux/Actions/counterActions.js";

//store => give the function (getState()); this function will give the current value.

console.log("initial Value", store.getState());


//another function will given by store is dispatch(); to call the actions we use dispatch.
store.dispatch(increment());

console.log("after inc", store.getState());

