import React from 'react';
import MovieCard from '../../containers/MovieCard';
import NavBar from '../NavBar';

const MovieList = ({ movies }) => {
  const displayedMovies = movies.map( (movie, index) => (
    <MovieCard {...movie} key={index}/>
  ))
  return (
    <div>
    <NavBar />
    <section>
      {displayedMovies}
    </section>
    </div>
  )
}

export default MovieList;