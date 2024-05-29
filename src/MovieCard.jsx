import React from "react";
import './App.css';
const MovieCard =({movie})=>{
    return(
        <div className='movie'>
                      <div>
                        <p> Year :{movie.Year}</p>
                      </div>
                      <div>
                        <img class="img" src={movie.Poster !== "N/A" ?movie.Poster: "https://via.placeholder.com/400"} alt={movie.Title} />
                      </div>
                      <div>
                        <span>Type :{movie.Type}</span>
                        <h3>Title :{movie.Title}</h3>
                      </div>
                </div>
    );
}

export default MovieCard  ;