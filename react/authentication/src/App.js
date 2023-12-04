import React, {useState} from "react";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import DashBoard from "./Components/DashBoard";
import './style.css';

const App = () => {
    const [token, setToken] = useState("");

    return (
        <div>
            <SignUp setToken={setToken}/>
            <Login setToken={setToken}/>
            <DashBoard token={token}/>
        </div>
    )
}

export default App;