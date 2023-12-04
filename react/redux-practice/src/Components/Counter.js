import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/actions/counterActions";

const Counter = () => {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div> 
            <h1> Counter </h1>
            <h3> Count: {count} </h3>
            <button onClick={() => dispatch(increment(1))}> INC </button>
            <button onClick={() => dispatch(decrement(1))}> DEC </button>
            <button onClick={() => dispatch(reset())}> RST </button>
        </div>
    )
}

export default Counter;