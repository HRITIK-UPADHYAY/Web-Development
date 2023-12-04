import React, {useState} from "react";

const MarkDown = () => {
    const [text, setText] = useState("");

    return (
        <div className="markdown">
            <div className="textarea">
                <textarea  onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="preview">
                <p> {text} </p>
            </div>
        </div>
    )
}


export default MarkDown;