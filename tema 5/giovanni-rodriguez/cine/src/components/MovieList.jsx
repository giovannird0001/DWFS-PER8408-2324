// MovieList.js

import React from 'react';
import { Link } from 'react-router-dom';
import moviesData from '../data/movies.json';

const MovieList = () => {
  return (
    <div>
      <h1>Listado de películas</h1>
      <ul>
        {moviesData.map((movie, index) => (
          <li key={index}>
            <Link to={`/movie/${index}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
