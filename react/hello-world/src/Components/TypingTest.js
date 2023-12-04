import React, { useState } from "react";

const TypingTextArea = () => {
  const [text, setText] = useState("This is the initial text. Click the button to start editing.");
  const [isEditing, setIsEditing] = useState(false);

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleSaveText = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <textarea > this is textarea </textarea>
    </div>
  )
}

export default TypingTextArea;
























// import React, { useState, useEffect } from "react";

// function TypingTest() {
//   const [text, setText] = useState(""); // The text to type
//   const [userInput, setUserInput] = useState(""); // The user's input
//   const [startTime, setStartTime] = useState(null);
//   const [isTyping, setIsTyping] = useState(false);
//   const [accuracy, setAccuracy] = useState(0);
//   const [speed, setSpeed] = useState(0);

//   // useEffect(() => {
//   //   // You can replace this with your own passage of text
//   //   const passage = "This is a typing test. Start typing and see how fast you can type it accurately.";
//   //   setText(passage);
//   // }, []);

//   // const handleInputChange = (e) => {
//   //   const inputText = e.target.value;
//   //   setUserInput(inputText);

//   //   if (!isTyping) {
//   //     setStartTime(Date.now());
//   //     setIsTyping(true);
//   //   }

//   //   calculateAccuracyAndSpeed(text, inputText);
//   // };

//   // const calculateAccuracyAndSpeed = (passage, inputText) => {
//   //   let correctCount = 0;
//   //   for (let i = 0; i < inputText.length; i++) {
//   //     if (inputText[i] === passage[i]) {
//   //       correctCount++;
//   //     }
//   //   }

//   //   const accuracy = (correctCount / passage.length) * 100;
//   //   const timeElapsed = (Date.now() - startTime) / 1000; // in seconds
//   //   const typingSpeed = (inputText.length / 5) / (timeElapsed / 60); // in words per minute

//   //   setAccuracy(accuracy.toFixed(2));
//   //   setSpeed(typingSpeed.toFixed(2));
//   // };

//   return (
//     <div>
//       <div>
//         <p>{text}</p>
//         <textarea
//           placeholder="Start typing here..." // Conditional rendering of the placeholder text
//           // value={userInput}
//           // onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <p>Accuracy: {accuracy}%</p>
//         <p>Speed: {speed} WPM</p>
//       </div>
//     </div>
//   );
// }

// export default TypingTest;
