import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/actionTypes";

let initialState = [];

const todoReducer = (state=initialState, actions) => {
    if(actions.type === ADD_TODO) return [...state, actions.payload];
    else if(actions.type === DELETE_TODO) return state.filter(todo => todo.id != actions.payload);
    else if(actions.type === UPDATE_TODO) {
        const arr = [];
        state.map(todo => {
            if(todo.id === actions.payload.id) {
                const obj = {
                    id: actions.payload.id,
                    title: actions.payload.data
                }
                arr.push(obj);
            }
            else arr.push(todo);
        })

        return arr;
    }
    else return state;
}

export default todoReducer;