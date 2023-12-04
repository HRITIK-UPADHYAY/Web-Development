import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CartProvider from "./Contexts/CartProvider";

ReactDOM.render(<CartProvider> <App /> </CartProvider>, document.getElementById("root"));