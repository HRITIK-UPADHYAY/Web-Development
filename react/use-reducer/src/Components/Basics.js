import React, {useReducer} from "react";

const initialState = 0;

function reducer(state, actions) {
    switch(actions.type) {
        case "increment": return state + actions.value;
        case "decrement": return state - 1;
        case "reset": return initialState;
    }
}

const Basics = () => {
    const[count, dispatch] = useReducer(reducer, initialState);

    //internally =>
    //dispatch("increment") ->(internally call the useReducer) useReducer -> 
    // (then useReducer call the reducer with state and provided actions) reducer(state, "increment");

  return (
    <div>
        <h1> Use Reducer Basics </h1>
        <h3> {count} </h3>
        <button onClick={() => dispatch({type: "increment", value: 2})}> Increment </button>
        <button onClick={() => dispatch({type: "decrement"})}> Decrement </button>
        <button onClick={() => dispatch({type: "reset"})}> Reset </button>
    </div>
  )
}

export default Basics;
