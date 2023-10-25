import React from "react";
import Header from "./Components/Header";
import TypingBox from "./Components/TypingBox";
import Footer from "./Components/Footer";
import "./style.css";

const App = () => {

    return (
        <div className="App">
            <Header />
            <TypingBox />
            <Footer />
        </div>
    )
}

export default App;