import React from 'react';
import MovieCard from '../../containers/MovieCard';
import PropTypes from 'prop-types';

import './styles.css';

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

FavoritesList.propTypes = {
  movies: PropTypes.array,
  favorites: PropTypes.array
};
export default FavoritesList;
