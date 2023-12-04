import Hello from "./Components/Hello";
import Hii from "./Components/Hii";
import { useState, useContext } from "react";
import styleContext from "./Contexts/StyleContext";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const App = () => {
    const [iconChange, setIconChange] = useState(true);
    const {style, dayTheme, nightTheme} = useContext(styleContext);

    function changeTheme() {
        if(iconChange) {
            nightTheme();
            setIconChange(false);
        }
        else {
            dayTheme();
            setIconChange(true);
        }
    }

    return (
        <div>
            <button onClick={changeTheme}> 
                {
                    iconChange ? <FaToggleOff /> : <FaToggleOn />
                }
            </button>
            <Hello />
            <h4> ************************************ </h4>
            <Hii />
        </div>
    )
}

export default App;