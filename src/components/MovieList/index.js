import React from 'react';
import MovieCard from '../../containers/MovieCard';
import NavBar from '../NavBar';

const MovieList = ({ movies, favorites = [] }) => {
  const displayedMovies = movies.map( (movie, index) => {
    let starColor = favorites.includes(movie.id) ? "#ffd24d" : '#f2f2f2';
    return <MovieCard {...movie} key={index} starColor={starColor}/>
  })
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