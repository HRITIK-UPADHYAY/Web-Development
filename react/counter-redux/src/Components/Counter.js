import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/actions/counterActions";


const Counter = () => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1> Counter </h1>
            <p> {counter} </p>
            <button onClick={() => dispatch(increment())}> Inc </button>
            <button onClick={() => dispatch(decrement())}> Dec </button>
            <button onClick={() => dispatch(reset())}> Res </button>
        </div>
    )
}

export default Counter;