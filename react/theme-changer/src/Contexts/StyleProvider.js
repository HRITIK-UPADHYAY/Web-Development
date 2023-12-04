import styleContext from "./StyleContext";
import { useState } from "react";

let dayTheme = {
        backgroundColor: "white",
        color: "black",
        border: "2px solid red",
        textAlign: "left",
    }

const StyleProvider = ({children}) => {
    const [style, setStyle] = useState(dayTheme)

    return (
        <styleContext.Provider value={
            {
                style: style, 
                dayTheme: () => setStyle(dayTheme),
                nightTheme: () => setStyle({...style, backgroundColor: "black", color: "white", border: "2px solid blue", textAlign: "center"})
            }
        }>
            {children}
        </styleContext.Provider>
    )
}

export default StyleProvider;