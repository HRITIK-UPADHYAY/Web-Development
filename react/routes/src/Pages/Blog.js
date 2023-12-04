import { useNavigate } from "react-router-dom";

const  Blog = ({count}) => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1> Blog </h1>
            <p> Blog Page Body Content </p>
            <p> Count: {count} </p>

            <button onClick={() => navigate(-1)}> Back </button>
            <button onClick={() => navigate(1)}> Forward </button>
        </div>
    )
}

export default Blog;