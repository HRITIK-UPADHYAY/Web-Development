import { useNavigate } from "react-router-dom";

const  About = ({count, setCount}) => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1> About </h1>
            <p> About Page Body Content </p>
            <p> Count: {count} </p>
            <button onClick={() => setCount(count+1)}> Increment </button>

            <button onClick={() => navigate(-1)}> Back </button>
            <button onClick={() => navigate(1)}> Forward </button>
        </div>
    )
}

export default About;