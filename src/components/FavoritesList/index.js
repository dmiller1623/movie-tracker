import React from 'react';
import MovieCard from '../../containers/MovieCard';

const FavoritesList = ({ movies, favorites }) => {
  const displayedMovies = favorites.map( (favorite, index) => {
    const movie = movies.find( movie => movie.movie_id === favorite);
    return <MovieCard {...movie} key={index} starColor={'#ffd24d'} />;
  });
  
  return (
    <main>
      {displayedMovies}
    </main>
  );
};

export default FavoritesList;
