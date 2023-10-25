import { findByRole } from "@testing-library/react";
import React, {useState} from "react";

const StateWithArray = () => {
    const[fruitName, setFruitName] = useState("");
    const [fav, setFav] = useState(["apple", "mango"])

    function updateName(e) {
        setFruitName(e.target.value)
    }

    function updateFavourite() {
        setFav([...fav, fruitName]);
    }

    return (
        <div>
            <input type="text" placeholder="Enter the fruit Name" onChange={updateName} />
            <button onClick={updateFavourite}> Submit </button>
            
            <div> {fav.join(", ")} </div>  

        </div>
    )
}

export default StateWithArray;