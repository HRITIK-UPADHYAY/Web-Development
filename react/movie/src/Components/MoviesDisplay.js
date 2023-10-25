import React, {useState} from "react";
import indianMovies from "../data/indianMovies";
import MoviesDetails from "./MoviesDetails";

const MoviesDisplay = ({updateSelectedMovie}) => {
    const [moviesName, setMoviesName] = useState(null);

    return (
        <div>
            {
                indianMovies.map((movie) => (
                    <div onClick={() => updateSelectedMovie(movie)}> {movie.title} </div> 
                ))
            }
        </div>
    )
}


export default MoviesDisplay;