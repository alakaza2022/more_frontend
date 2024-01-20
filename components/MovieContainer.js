import React from 'react';
import styles from './MovieContainer.module.css';

const MovieContainer = ({ movie }) => {
    return (
        <div className={styles.movieContainer}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} className={styles.movieImage} />
            <h2 className={styles.movieTitle}>{movie.title || movie.name}</h2>
            <p className={styles.movieOverview}>{movie.overview}</p>
            {movie.release_date && <p className={styles.movieReleaseDate}>Release Date: {movie.release_date}</p>}
            <p className={styles.moviePopularity}>Popularity: {movie.popularity}</p>
            <p className={styles.movieVoteAverage}>Vote Average: {movie.vote_average}</p>
        </div>
    );
};

export default MovieContainer;

