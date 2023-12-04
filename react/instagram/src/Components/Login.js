import React, {useState, useContext} from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({email: "", password: ""});

    const {email, password} = user;
    const {setToken} = useContext(UserContext);
    const navigate = useNavigate();

    function handleInput(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        //validations.
        if(!email || !password) alert("All Fields Are Mandatory");
        else {
            axios.post("https://instagram-express-app.vercel.app/api/auth/login/", {email, password})
            .then(response => {
                console.log(response.data);
                setToken(response.data.data.token);  //from the context.

                //update token to localStorage.
                localStorage.setItem("token", response.data.data.token);

                alert("Login Successfully");
                navigate("/dashboard");
            })
            .catch(err => console.log(err.response.data.message))
        }
    }


    return (
        <div>
            <h1> Login Form </h1>
            <form onSubmit={handleSubmit}> 
                <input type="text" name="email" placeholder="Enter Your Email" value={user.email} onChange={handleInput}/>
                <input type="password" name="password" placeholder="Enter Your Password" value={user.password} onChange={handleInput}/>
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default Login;