import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/actions/todoActions";

const Todo = () => {
    const [render, setRender] = useState(true);
    const [task, setTask] = useState("");
    const [updateId, setUpdateId] = useState(null);
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        if(render) dispatch(addTodo({id: todos.length+1, title: task}));
        else if(render === false) {
            dispatch(updateTodo(updateId, task));
            setRender(true);
            setUpdateId(null);
        }
        setTask("");
    }

    function handleDelete(todoId) {
        dispatch(deleteTodo(todoId));
    }

    function handleUpdate(id, task) {
        setRender(false);
        setTask(task);
        setUpdateId(id);
    }

    return (
        <div>
            <h1> Todo List </h1> 
            <hr />

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)}/>
                <button type="submit"> {render == false ? "Update Task": "Add Task"} </button>
            </form>

            <ul>
                {
                    render && todos.length > 0 && todos.map(item => (
                        <li key={item.id}> {item.title}
                            <button onClick={() => dispatch(deleteTodo(item.id))}> Delete </button>
                            <button onClick={() => handleUpdate(item.id, item.title)}> Update </button>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}


export default Todo;