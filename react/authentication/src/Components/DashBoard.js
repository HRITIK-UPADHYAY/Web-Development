import React, {useState} from "react";
import axios from "axios";

let newToken;

const DashBoard = ({token}) => {
    const [joke, setJoke] = useState("");

    async function getZukuJoke() {
        //check if token present in localStorage.
        if(token === "") newToken = localStorage.getItem("token");
        else newToken = token;

        try{
            const response = await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku", {
                headers: {
                    authorization: `Bearer ${newToken}`
                }
            })

            if(response) {
                console.log(response.data);
                setJoke(response.data.data.message);
            }
        } 
        catch(err) {
            console.log(err);
        } 
    }

    function logout() {
        axios.delete("https://instagram-express-app.vercel.app/api/auth/logout", {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data);
            setJoke("");
            localStorage.removeItem("token");
        })
        .catch(err => console.log(err.resonse.data))
    }

    return (
        <div>
            <h1> DashBoard </h1>
            <h2> {joke} </h2>
            <button onClick={getZukuJoke}> Get Joke </button>
            <button onClick={logout}> LogOut </button>
        </div>
    )
}

export default DashBoard;