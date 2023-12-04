import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/actionTypes";

const initialValue = [];

const todoReducer = (state=initialValue, actions) => {
    if(actions.type === ADD_TODO) {
        return [...state, actions.payload];
    }
    else if(actions.type === DELETE_TODO)  {
        return state.filter(todo => actions.payload !== todo.id);
    }
    else if(actions.type === UPDATE_TODO) {
        let idx;
        for(let i=0; i<state.length; i++) if(state[i].id === actions.payload.id) idx = i;

        let arr = structuredClone(state);
        arr[idx].title = actions.payload.newTitle;
        return arr;
    }
    else return state;
}


export default todoReducer;