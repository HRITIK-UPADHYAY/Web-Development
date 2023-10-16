import React from "react";

//props = "property".
//props is a read only object that's the differenec b/w the props object and normal object.
const Button = ({btnName, color}) => {
    return (
        <button style={{backgroundColor: color}}> {btnName} </button>
    )
}

export default Button;