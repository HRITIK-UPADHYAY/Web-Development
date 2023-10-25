import React, {useState} from "react";
import Hello from "./Components/Hello";

const App = () => {
    const [name, setName] = useState("");

    return (
        <div>
            <h1> Hello {name} </h1>
            <Hello updateName={setName}/> 
        </div>
    )
}

export default App;