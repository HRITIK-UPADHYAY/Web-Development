import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";

export const add_todo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const delete_todo = (todoId) => {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}

export const update_todo = (todoId, updateTodo) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id: todoId,
            newTitle: updateTodo
        }
    }
}