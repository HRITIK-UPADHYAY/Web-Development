import React from "react";
import indianMovies from "../data/indianMovies";

const MoviesDetails = ({updateMovieName}) => {
    return (
        <div>
            {
                updateMovieName !== null && (
                    <div>
                        <p> {updateMovieName.title} </p>
                        <p> {updateMovieName.director} </p>
                        <p> {updateMovieName.year} </p>
                        <p> {updateMovieName.genre} </p>
                        <p> {updateMovieName.rating} </p>
                    </div>
                )
            }
        </div>
    )
}


export default MoviesDetails;