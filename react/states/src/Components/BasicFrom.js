import React, {useState} from "react";

const BasicForm = () => {
    const [text, setText] = useState("");

    function writeP(event) {
        setText(document.getElementById("input").value);
    }

    return (
        <div>
            <h1> Basic Form </h1>

            <input type="text" placeholder="Enter your Name" id="input" />
            <button onClick={writeP}> Submit </button>
            <p> {text} </p>
        </div>
    )
}


export default BasicForm;