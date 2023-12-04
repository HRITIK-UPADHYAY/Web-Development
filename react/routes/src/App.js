import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import { useState } from "react";
import "./style.css";

//route
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About count={count} setCount={setCount} />} />
        <Route path="/blog" element={<Blog count={count}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}


export default App;