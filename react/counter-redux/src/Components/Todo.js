import React, {useState} from "react";
import { add_todo, delete_todo, update_todo } from "../redux/actions/todoAction";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [editId, setEditId] = useState(0);
    const todoArr = useSelector(state => state.todo);
    const dispatch = useDispatch();

    function implementAddTodo(e) { 
        e.preventDefault();
        if(editId == 0) {
           
            const len = todoArr.length;
            dispatch(add_todo({id: len+1, title: todo}));
            setTodo("");
        }
        else {
            dispatch(update_todo(editId, todo));
            setEditId(0);
            setTodo("");
        }
        
    }

    return (
        <div> 
            { editId === 0? <h1> Add Todo </h1>: <h1> Update Todo </h1> }
            
            <form>
                <input type="text" placeholder="Enter Todo" onChange={(e) => setTodo(e.target.value)} value={todo}/>
                <button onClick={implementAddTodo}> 
                    {editId === 0? "Add Todo": "Update Todo" }
                </button>
            </form>

            <ul>
               {
                    todoArr.length > 0 && todoArr.map((todo, index) => (
                        <li key={todo.id}>
                            <span> {todo.title} </span>
                            <button onClick={() => dispatch(delete_todo(todo.id))}> Delete </button>
                            <button onClick={() => setEditId(todo.id)}> Edit </button>
                        </li>
                    ))
                } 
            </ul>
            
        </div>
    )
}

export default Todo;