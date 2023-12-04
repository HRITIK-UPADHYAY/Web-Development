import React, {useState, useContext} from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [user, setUser] = useState({
        name: "", email: "", password: "", confirmPassword: ""
    });

    const {setToken} = useContext(UserContext);
    const {name, email, password, confirmPassword} = user;
    const navigate = useNavigate();

    function handleInput(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        //validations.
        if(!name || !email || !password || !confirmPassword) alert("All Fields Are Mandatory");
        else if(password !== confirmPassword) alert("Password Not Match");
        else {
            axios.post("https://instagram-express-app.vercel.app/api/auth/signup", {name, email, password})
            .then(response => {
                console.log(response.data);
                setToken(response.data.data.token);

                //add token to localStorage.
                localStorage.setItem("token", response.data.data.token);

                alert("Signup Successfully");
                navigate("/dashboard");
            })
            .catch(err => console.log(err.response.data.message))
        }
    }


    return (
        <div>
            <h1> SignUp Form </h1>
            <form onSubmit={handleSubmit}> 
                <input type="text" name="name" placeholder="Enter Your Name"  value={user.name} onChange={handleInput}/>
                <input type="text" name="email" placeholder="Enter Your Email" value={user.email} onChange={handleInput}/>
                <input type="password" name="password" placeholder="Enter Your Password" value={user.password} onChange={handleInput}/>
                <input type="password" name="confirmPassword" placeholder="Enter Your Confirm Password"  value={user.confirmPassword} onChange={handleInput}/>
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default Signup;