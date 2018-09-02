import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { addFavorite, populateFavorites } from '../../actions';
import { addNewFavorite, deleteFavorite } from '../../utilities/apiCalls/apiCalls';

import './styles.css';

export class MovieCard extends Component {
  toggleFavorite = async () => {
    const { id, name } = this.props.user;
    const { favorites, addFavorite, populateFavorites } = this.props;
    const movie = {...this.props, user_id: id};
    
    if (!name) {
      return alert('To favorite a movie, please login or sign up for a new account.');
    }

    if (favorites.includes(movie.movie_id)) {
      await deleteFavorite(id, movie.movie_id);
      const updatedFavorites = favorites.filter( favorite => favorite !== movie.movie_id);
      populateFavorites(updatedFavorites);
    } else {
      await addNewFavorite(movie);
      addFavorite(movie.movie_id);
    }
  }

  render() {
    const { title, poster_path, starColor} = this.props;
    const posterUrl = `http://image.tmdb.org/t/p/w342//${poster_path}`;

    return (
      <article>
        <svg 
          onClick={() => this.toggleFavorite()}
          viewBox='0 0 512 512' width='2.5rem'>
          <path d='m463.515 0h-415.03v512l207.515-130.554 207.515 130.554z' fill='#f14742'/>
          <path d='m388.692 162.487c-.882-2.716-3.758-5.228-8.513-5.515l-84.734-5.664-31.571-78.837c-1.742-4.433-5.021-6.392-7.876-6.392s-6.134 1.959-7.876 6.392l-31.571 78.837-84.734 5.664c-4.755.287-7.631 2.799-8.513 5.515-.882 2.715-.032 6.439 3.645 9.465l65.222 54.387-20.797 82.336c-1.197 4.61.305 8.124 2.613 9.801 2.309 1.677 6.114 2.018 10.129-.544l71.884-45.22 71.88 45.222c4.015 2.562 7.819 2.221 10.129.544 2.31-1.678 3.81-5.192 2.613-9.801l-20.797-82.336 65.221-54.387c3.679-3.028 4.529-6.753 3.646-9.467z' fill={starColor}/>
        </svg>
        <img src={posterUrl} alt={title + ' poster_path'} />
      </article>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  favorites: state.favorites
});

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (movieId) => dispatch(addFavorite(movieId)),
  populateFavorites: (favorites) => dispatch(populateFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

const { string, func, number, shape, arrayOf } = PropTypes;
MovieCard.propTypes = {
  title: string,
  poster_path: string,
  starColor: string,
  favorites: arrayOf(number),
  user: shape({
    id: number,
    name: string
  }),
  addFavorite: func,
  populateFavorites: func
};