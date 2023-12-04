import { INCREMENT, DECREMENT, RESET } from "./actionTypes.js";

//for every action i will be creating a action creators.
//action => are objects with type.
//action creators => are function that return actions.

//action creators.
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}