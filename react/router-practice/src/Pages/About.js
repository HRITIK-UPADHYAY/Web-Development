import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            About
            <button onClick={() => navigate("/")}> Go To Home </button>
            {/* <button onClick={() => navigate("contact")}> Go To Contact </button> */}
            <button onClick={() => navigate(+1)}> Next </button>
            <button onClick={() => navigate(-1)}> Previous </button>
        </div>
    )
}

export default About;