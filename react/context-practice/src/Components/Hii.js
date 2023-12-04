import React, {useContext} from "react";
import cartContext from "../Contexts/cartContext";

const Hii = () => {
    let name = useContext(cartContext);

    return (
        <div> Hii {name} </div>
    )
}

export default Hii;