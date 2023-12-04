import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import StyleProvider from "./Contexts/StyleProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
    <React.StrictMode>
        <StyleProvider> <App /> </StyleProvider>
    </React.StrictMode>
);