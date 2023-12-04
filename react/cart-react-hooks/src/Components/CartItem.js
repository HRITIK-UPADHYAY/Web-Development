import React, { useContext } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import cartContext from "../Contexts/cartContext";

const CartItem = ({item}) => {
    const {removeItem, increment, decrement} = useContext(cartContext);

    return (
        <div>
            <div className="brand">
                <img src={item.img} alt="item-Image"  height="80" width="80" />

                <div className="item-details">
                    <h2> {item.title} </h2>
                    <p> {item.price} </p>
                    <button onClick={() => removeItem(item.id)}> remove </button>
                </div>
                
                <div className="item-qty">
                    <FaChevronUp onClick={() => increment(item.id)}/>
                    <p> {item.amount} </p>
                    <FaChevronDown onClick={() => decrement(item.id)}/>
                </div>
            </div>
        </div>
    )
}

export default CartItem;