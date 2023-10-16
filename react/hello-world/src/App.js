import React from "react";
import Button from "./Components/Button"

const App = () => {
    let obj = {color: "Blue", textAlign: "center"};
    let a = 19;
    return (
        <div> 
         <h1 className="heading">Hello, How are you </h1>
         <p> I am dancing on the floor </p>

         <h2> Favourite Fruits </h2>
         <Button btnName="Apple" color="red"/>
         <Button btnName="Mango" color="yellow"/>
         <Button btnName="Orange" color="orange"/>
        </div>
    )
}

export default App;