import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";


export const addTodo = (newTodo) => {
    return { 
        type: ADD_TODO,
        payload: newTodo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const updateTodo = (id, data) => {
    return {
        type: UPDATE_TODO,
        payload: {id, data}
    }
}