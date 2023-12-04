import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({count, setCount}) => {
    const navigate = useNavigate();
    
    return (
        <div>
            Blog
            <p> {count} </p>
            <button onClick={() => setCount(count + 1)}> Inc Count </button>

            <button onClick={() => navigate(+1)}> Next </button>
            <button onClick={() => navigate(-1)}> Previous </button>
        </div>
    )
}

export default Blog;