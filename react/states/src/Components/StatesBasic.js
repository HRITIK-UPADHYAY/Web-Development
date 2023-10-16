import React, {useState} from "react";

const StateBasic = () => {
    const [count, setCount] = useState(10);

    let a = 10;

    function increase() {
        a += 1;
        console.log(a);
    }

    function increaseCount() {
        setCount(count + 1);
    }

    return (
        <div> 
            <h1> a: {a} </h1>
            <button onClick={increase}> Increase </button>

            <h1> count: {count} </h1>
            <button onClick={increaseCount}> Increase </button>
        </div>
    )
}

export default StateBasic;