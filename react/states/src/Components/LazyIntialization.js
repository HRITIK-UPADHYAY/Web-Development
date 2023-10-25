import React, {useState} from "react";

const LazyIntialization = () => {
    const [count, setCount] = useState(() => {
        console.log("hello");
        return 0;
    });

    return (
        <div>
            <h1> {count} </h1>
            <button onClick={() => setCount(count+1)}> Increment </button>
        </div>
    )
}

export default LazyIntialization;