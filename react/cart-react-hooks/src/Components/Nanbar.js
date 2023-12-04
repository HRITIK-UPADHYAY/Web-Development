import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import cartContext from "../Contexts/cartContext";

const Navbar = () => {
    const {amount} = useContext(cartContext);

    return (
        <div>
            <div className="brand"> Navbar </div>
            <div className="nav-icon">
                <FaCartPlus />
                <div className="amout"> {amount} </div>
            </div>
        </div>
    )
}

export default Navbar;