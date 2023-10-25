import React, {useState} from "react";

const AsyncState = () => {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);  //setCount is async function.
        setCount(count + 3);
        console.log(count);   //(expectation is the value of count) but in reality it will not the actual value.
    }

    return (
        <div>
            <h1> {count} </h1>
            <button onClick={increase}> Increase </button>
        </div>
    )
}

export default AsyncState;