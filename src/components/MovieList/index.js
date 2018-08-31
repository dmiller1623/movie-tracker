import React from 'react';
import MovieCard from '../../containers/MovieCard';
import './styles.css';

const MovieList = ({ movies, favorites = [] }) => {
  const displayedMovies = movies.map( (movie, index) => {
    const starColor = favorites.includes(movie.movie_id) ? '#ffd24d' : '#f2f2f2';
    return <MovieCard {...movie} key={index} starColor={starColor}/>
  });

  return (
    <main>
      {displayedMovies}
    </main>
  )
}

export default MovieList;
