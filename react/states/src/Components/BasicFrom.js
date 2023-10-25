import React, {useState} from "react";

const BasicForm = () => {
    const [text, setText] = useState("");
    const [btnClick, setBtnClick] = useState(false);

    function writeP(event) {
        setText(event.target.value);
        // setText(document.getElementById("input").value);  // or create a condition below that.
    }

    function handleButton() {
        setBtnClick(true);
    }

    return (
        <div>
            <h1> Basic Form </h1>

            <input type="text" placeholder="Enter your Name" id="input" onChange={writeP} />
            <button onClick={handleButton}> Submit </button>
            
            {
                btnClick === true && <p> {text} </p>
            }
            
        </div>
    )
}


export default BasicForm;