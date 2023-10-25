import React, {useState} from "react";
import MoviesDetails from "./Components/MoviesDetails";
import MoviesDisplay from "./Components/MoviesDisplay";


const App = () => {
    const [moviesName, setMoviesName] = useState(null);

    return (
        <div>
            <MoviesDisplay updateSelectedMovie={setMoviesName}/>

            <MoviesDetails updateMovieName={moviesName}/>
            
        </div>
    )
}

export default App;