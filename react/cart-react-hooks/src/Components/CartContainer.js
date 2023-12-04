import React, { useContext } from "react";
import cartContext from "../Contexts/cartContext";
import CartItem from "./CartItem";

const CartContainer = () => {
    const {cartItems, amount, total, loading, clearCart} = useContext(cartContext);

    if(loading) return <h1> Loading... </h1>

    return (
        <div>
            <div className="brand">
                <h1> Your Cart </h1>
                {amount === 0 && <p> Has No Item </p>}

                {cartItems.map(item => (
                    <CartItem  key={item.id} item={item}/>
                ))}

                <hr />

                <div className="cart-total">
                    <p>Total</p>
                    <p> {total.toFixed(2)} </p>
                </div>

                <div clear-cart> 
                    <button onClick={clearCart} > Clear </button>
                </div>
            </div>
        </div>
    )
}

export default CartContainer;