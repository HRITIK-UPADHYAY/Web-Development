import React, { useEffect, useState } from "react";
import cartContext from "./cartContext";

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch("https://course-api.com/react-useReducer-cart-project");

                if(!response.ok){
                    setLoading(false);
                    return
                }

                const result = await response.json();
                // console.log(result);
                setCartItems(result);
                setLoading(false);
            }
            catch(err) {
                setLoading(false);
            }
        }

        getUser();
    }, []);

    useEffect(() => {
        const calculateTotal = () => {
            let t = 0, a = 0;

            cartItems.forEach((item) => {
                t += item.price * item.amount;
                a += item.amount;
            })

            setTotal(t);
            setAmount(a);
        }

        calculateTotal();
    }, [cartItems]);

    const clearCart = () => { setCartItems([]); }

    const removeItem = (id) => { setCartItems(cartItems.filter(item => item.id != id)); }

    const increment = (id) => { 
        let item = cartItems.find(item => item.id === id);
        item.amount++;
        setCartItems((cartItems) => {
            return cartItems.map(cartItem => cartItem.id === id ? item : cartItem );
        });
    }

    const decrement = (id) => { 
        let item = cartItems.find(item => item.id === id);
        item.amount--;

        if(item.amount === 0) {
            removeItem(id);
            return;
        }

        setCartItems((cartItems) => {
            return cartItems.map(cartItem => cartItem.id === id ? item : cartItem );
        });
    }

    return (
        <cartContext.Provider value={{cartItems, amount, total, loading, clearCart, removeItem, increment, decrement}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartProvider;