import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            Contact
            <button onClick={() => navigate(+1)}> Next </button>
            <button onClick={() => navigate(-1)}> Previous </button>
        </div>
    )
}

export default Contact;