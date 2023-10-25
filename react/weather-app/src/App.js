import React, {useState, useEffect} from "react";
import Summer from './Images/Summer.avif'

const App = () => {
    const [lattitude, setLattitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [hemisphere, setHemisphere] = useState("");
    const [month, setMonth] = useState(new Date().getMonth()+1);

    useEffect(() => {
        geoLocation();
    }, []);

    function geoLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLattitude(position.coords.latitude);
                setLongitude(position.coords.longitude);

                if(position.coords.latitude > 0) setHemisphere("Northern Hemisphere");
                else if(position.coords.latitude < 0) setHemisphere("Southern Hemisphere");
                else setHemisphere("Equator");
            });
        }
    }

    return (
        <div>
            <h1> weather App </h1>
            <h2> Lat: {lattitude} </h2>
            <h2> Long: {longitude} </h2> 
            <h2> Hemisphere: {hemisphere} </h2>


            {
                (hemisphere && ((hemisphere === "Northern Hemisphere") && month >=4 && month <= 10) ||
                (hemisphere === "Southern Hemisphere" && (month <= 3 || month >= 9))) &&
                <div>
                    <h1> Welcome To The Summer Season </h1>
                    <img src={Summer}  alt="Summer Imgage"/>
                </div>
            }
        </div>
    )
}

export default App;