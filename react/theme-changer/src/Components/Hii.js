import { useContext } from "react";
import StyleContext from "../Contexts/StyleContext";

const Hii = () => {
    const {style, dayTheme, nightTheme} = useContext(StyleContext);
    const {backgroundColor, color, border} = style;

    return (
        <div style={{
            backgroundColor: backgroundColor,
            color: color,
            border: border,
        }}>
            <h1> Hii World </h1>
            <p> This is Hii Components </p>
        </div>
    )
}

export default Hii;