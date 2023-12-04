import React from "react";
import useToggle from "../CustomHooks/useToggle";
import useFetch from "../CustomHooks/useFetch";

const Toggle = () => {
    const {show, toggle} = useToggle(true)
    const {show: showList, toggle: setToggleList} = useToggle(true);
    const {users, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading) return <h1> Loading... </h1>
    if(error) return <h1> Error </h1>

    return (
        <div>
            <button onClick={toggle}> Toggle </button>
            { show && <p> Toggle the Para </p> }


            <button onClick={setToggleList}> Toggle List </button>
            { showList && (
                <ul>
                    { users.map((user, idx) => ( <li key={idx}> {user.name} </li> ))}
                </ul> 
            )}
        </div>
    )
}


export default Toggle;