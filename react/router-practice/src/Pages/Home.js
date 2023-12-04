import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            Home
            <button onClick={() => navigate(+1)}> Next </button>
            <button onClick={() => navigate(-1)}> Previous </button>
        </div>
    )
}

export default Home;