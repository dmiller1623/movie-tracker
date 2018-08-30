import React from 'react';

import MovieCard from '../../containers/MovieCard';
import NavBar from '../../containers/NavBar';

const FavoritesList = ({ movies, favorites }) => {
  const displayedMovies = favorites.map( (favorite, index) => {
    const movie = movies.find( movie => movie.movie_id === favorite);
    return <MovieCard {...movie} key={index} starColor={'#ffd24d'} />
  })
  return (
    <main>
      <NavBar />
      <section>
        {displayedMovies}
      </section>
    </main>
  )
}

export default FavoritesList;
