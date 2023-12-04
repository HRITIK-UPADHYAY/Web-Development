import React, {useState, useEffect, useContext,} from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useNavigate} from "react-router-dom";

const DashBoard = () => {
    const [joke, setJoke] = useState("");
    const [name, setName] = useState("");
    const {token, setToken} = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) setToken(token);
        if(!token) navigate("/login");

        getJoke();
    }, [token])

   async function getJoke() {
        try {
            const response = await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })

            console.log(response.data);
            setJoke(response.data.data.message);
            setName(response.data.data.user.name);
        }
        catch(e) {
            console.log(e);
        }
    }

    async function handleLogout() {
        try {
            const response = await axios.delete("https://instagram-express-app.vercel.app/api/auth/logout", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })

            console.log("Logout", response.data);
            setToken(null);
            setJoke("");
            setName("");
            localStorage.removeItem("token"); //remove token from localStorage.
        }
        catch(e) {
            console.log(e);
        }
    }

    return (
        <div> 
           <h1> Welcome {name} </h1> 
            <p> {joke} </p>

            <button onClick={handleLogout}> Logout </button>
        </div>
        
    )
}

export default DashBoard;