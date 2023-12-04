import React from "react";
import Button from "./Components/Button";
import TypingTest from "./Components/TypingTest";
import MarkDown from "./Components/Markdown";

const App = () => {
    let obj = {color: "Blue", textAlign: "center"};
    let a = 19;
    return (
        <div> 

            <MarkDown />
         {/* <h1 className="heading">Hello, How are you </h1>
         <p> I am dancing on the floor </p>

         <h2> Favourite Fruits </h2>
         <Button btnName="Apple" color="red"/>
         <Button btnName="Mango" color="yellow"/>
         <Button btnName="Orange" color="orange"/> */}

         {/* <TypingTest /> */}
        </div>
    )
}

export default App;