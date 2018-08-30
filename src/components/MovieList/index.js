import React from 'react';
import MovieCard from '../../containers/MovieCard';
import NavBar from '../../containers/NavBar';

const MovieList = ({ movies, favorites = [] }) => {
  const displayedMovies = movies.map( (movie, index) => {
    let starColor = favorites.includes(movie.movie_id) ? '#ffd24d' : '#f2f2f2';
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