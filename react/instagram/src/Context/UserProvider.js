import UserContext from "./UserContext";
import { useState, useEffect } from "react";

const UserProvider = ({children}) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) setToken(token);
    }, [])

    return (
        <div>
            <UserContext.Provider value={{token, setToken}}>
                {children}
            </UserContext.Provider>
        </div>
        
    )
}

export default UserProvider;