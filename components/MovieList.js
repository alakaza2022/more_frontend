import React, { useState } from 'react';
import MovieContainer from './MovieContainer';

const MovieList = ({ movies }) => {
  const [sortOption, setSortOption] = useState('release_date');

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const compareMovies = (a, b) => {
    if (sortOption === 'release_date') {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return dateB - dateA;
    } else {
      return -a[sortOption] + b[sortOption];
    }
  };

  const sortedMovies = [...movies].sort(compareMovies);

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'20px'}}>
      <label htmlFor="sort" style={{ marginRight: '10px' }}>Sort by:</label>
      <select id="sort" value={sortOption} onChange={handleSortChange} style={{ padding: '5px' }}>
        <option value="release_date">Release Date</option>
        <option value="popularity">Popularity</option>
        <option value="vote_average">Vote Average</option>
      </select>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
        {sortedMovies.map((movie) => (
          <MovieContainer key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
    </>
  );
};

export default MovieList;
