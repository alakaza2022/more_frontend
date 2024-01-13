import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title || movie.name}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date || movie.first_air_date}</p>
            <p>Popularity: {movie.popularity}</p>
            <p>Vote Average: {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
