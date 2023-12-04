import { useNavigate } from "react-router-dom";

const  Contact = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1> Contact </h1>
            <p> Contact Page Body Content </p>

            <button onClick={() => navigate(-1)}> Back </button>
            <button onClick={() => navigate(1)}> Forward </button>
        </div>
    )
}

export default Contact;