import React, { useState } from "react";

const Counter = () => {
    const [a, setA] = useState(0);

    return (
        <div>
            <h1> counter App </h1>
            <h2> Count: {a} </h2>
            <button onClick={() => setA(a+1)}> Increase </button>
            <button onClick={() => setA(a-1)}> Decrease </button>
            <button onClick={() => setA(0)}> Reset </button>
        </div>
    )
}

export default Counter;