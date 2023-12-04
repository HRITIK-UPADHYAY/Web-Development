import React, {useContext} from "react";
import CricketContext from "../Context/CricketContext";

const Hello = () => {
    const {cricketer, setCricketer} = useContext(CricketContext);
    const {name, age, country, retired} = cricketer;

    return (
        <div>
            <h1> Hello {name} </h1>
            <p> age: {age} </p>
            <button onClick={() => setCricketer({...cricketer, age: cricketer.age+1})}> Update Age </button>
            <p> country: {country} </p>
            <p> retired: {retired} </p>
            <p> Hope you are doing well! </p>
            <hr />
        </div>
    )
}

export default Hello;