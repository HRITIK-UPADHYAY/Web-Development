import React, {useContext} from "react";
import cartContext from "../Contexts/cartContext";

const Hello = () => {
    let name = useContext(cartContext);

    return (
        <div> Hello {name} </div>
    )
}

export default Hello;