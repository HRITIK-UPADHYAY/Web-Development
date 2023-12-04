import { useContext, useState } from "react";
import StyleContext from "../Contexts/StyleContext";

const Hello = () => {
    const {style, dayTheme, nightTheme} = useContext(StyleContext);
    const {backgroundColor, color, border} = style;

    return (
        <div>
            <div style={{
                backgroundColor: backgroundColor,
                color: color,
                border: border,
            }}>
                <h1> Hello World </h1>
                <p> This is Hello Components </p>
            </div>
            <br />
        </div>
        
    )
}

export default Hello;