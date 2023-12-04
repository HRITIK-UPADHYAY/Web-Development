import { useNavigate } from "react-router-dom";

const  Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1> Home </h1>
            <p> Home Page Body Content </p>
            <button onClick={() => navigate(-1)}> Back </button>
            <button onClick={() => navigate(1)}> Forward </button>
            {/* <button onClick={() => navigate("/blog")}> Read Blogs with / </button> */}
            {/* <button onClick={() => navigate("blog")}> Read Blogs with / </button> */} 
        </div>
    )
}

export default Home;