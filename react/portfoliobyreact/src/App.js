import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import sectionData from "./Data/sectionData";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />

      {
        sectionData.map((value) => (
            <Section heading={value.title} description={value.des} />
        ))
      }
      
    </div>
  );
};

export default App;
