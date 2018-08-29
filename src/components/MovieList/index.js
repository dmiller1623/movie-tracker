import React from 'react';
import MovieCard from '../../containers/MovieCard';

const MovieList = ({ movies }) => {
  const displayedMovies = movies.map( (movie, index) => (
    <MovieCard {...movie} key={index}/>
  ))
  return (
    <section>
      {displayedMovies}
    </section>
  )
}

export default MovieList;