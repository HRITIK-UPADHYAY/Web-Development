import React, {useState} from "react";
import paraArr from '../data/paraArr'

const TypingBox = () => {
    const [time, setTime] = useState(15);
    const [idx, setIdx] = useState(Math.floor(Math.random()*paraArr.length));
    const [totalWords, setTotalWords] = useState(1000);

    const para = paraArr[idx];
    const arr = para.split(" ");

    function refreshText() {
        setTotalWords(1000);
        setIdx(Math.floor(Math.random()*paraArr.length))
    }

    function handleEscape() {
        refreshText();
    }

    return (
        <div className="typingBox">
            <div className="upper">
                <div className="left"> {time} </div>
                <div className="right"> 
                    <p onClick={() => setTime(15)}> 15s </p>
                    <p onClick={() => setTime(30)}> 30s </p>
                    <p onClick={() => setTime(60)}> 60s </p>
                </div>
            </div>

            <div className="middle">
                {
                    arr.slice(0, totalWords).map((item) => (
                        <span> {item} </span>
                    ))
                }
                
            </div>

            <div className="lower">
                <div> <span class="material-icons" onClick={refreshText}> refresh </span> </div>

                <div className="wordsButton">
                    <button onClick={handleEscape}> esc </button>
                    <span> - reset </span>
                </div>

                <div className="wordsButton">
                    <button onClick={() => setTotalWords(10)}> 10 </button>
                    <button onClick={() => setTotalWords(50)}> 50 </button>
                    <button onClick={() => setTotalWords(80)}> 80 </button>
                    <button onClick={() => setTotalWords(100)}> 100 </button>
                    <span> - no. of words </span>
                </div>

            </div>
        </div>
    )
}

export default TypingBox;