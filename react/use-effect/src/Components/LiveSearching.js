import React, {useState, useEffect} from "react";

const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "France",
    "Germany",
    "China",
    "Japan",
    "India",
    "Brazil",
    "Australia",
  ];

const LiveSearching = () => {
    const [Search, setSearch] = useState("");
    const [filterCountries, setFilterCountries] = useState(countries);

    useEffect(() => {
        applySearch(); 
    }, [Search])
    
    function applySearch() {
        setFilterCountries(filterCountries.filter(country => country.toLowerCase().includes(Search.toLowerCase())));
    }

    return (
        <div> 
            <input type="text" placeholder="Enter Country" onChange={(e) => setSearch(e.target.value)}/>

            {
                filterCountries.map((country) => {
                    return (
                        <p> {country} </p>
                    )
                })
            }
            
        </div>
    )
}

export default LiveSearching;