import React, { useState, useEffect } from "react";

const useFetch = (url) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch(url);

                if(!response.ok){
                    setError(true);
                    setLoading(false);
                    return
                }

                const result = await response.json();
                // console.log(result);
                setUsers(result);
                setLoading(false);
            }
            catch(err) {
                setError(true);
                setLoading(false);
                console.log(error);
            }
        }

        getUser();
    }, [])

    return {users, loading, error};
}

export default useFetch;