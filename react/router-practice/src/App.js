import React, {useState} from "react";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog  count={count} setCount={setCount}/>} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App;