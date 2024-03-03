// MovieDetailsPage.js

import React from 'react';
import moviesData from '../data/movies.json';
import {    useParams } from "react-router-dom"

export const getmoviesById = (id)=>{
    return  moviesData.find(movie =>movie.id == id);  
}
const MovieDetailsPage = () => {
    const {id} = useParams();
    console.log("muestrame");

  const movie = getmoviesById(id);

  if (!movie) {
    return <div>Película no encontrada</div>;
  }

  return <>
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <p>Duración: {movie.length} minutos</p>
      <p>Género: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
    </div>
    </>;
};

export default MovieDetailsPage;
