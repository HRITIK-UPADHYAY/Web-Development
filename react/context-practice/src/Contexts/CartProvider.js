import React from "react";
import cartContext from "./cartContext";

const cartProvider = (props) => {
    let name = "HRITIK";

    return (
        <cartContext.Provider value={name}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartProvider;