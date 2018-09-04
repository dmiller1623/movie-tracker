import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MovieCard from '../../containers/MovieCard';
import './styles.css';
import {getMovies} from '../../utilities/apiCalls/apiCalls';
import { addMovies } from '../../actions';

export class MovieList extends Component {

  addResults = async () => {
    const { movies, addMovies } = this.props;
    const page = movies.length / 8;
    const moreMovies = await getMovies(page + 1);
    addMovies(moreMovies);
  }
  
  render() {
    const { movies, favorites } = this.props;
    const displayedMovies = movies.map( (movie, index) => {
      const starColor = favorites.includes(movie.movie_id) ? '#ffd24d' : '#f2f2f2';
      return <MovieCard {...movie} key={index} starColor={starColor}/>;
    });

    return (
      <main>
        <div className='movie-cards'>
          {displayedMovies}
        </div>
        <button 
          className='more-btn'
          onClick={() => this.addResults()} >
          View More
        </button>
      </main>
    );
  }

}

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (moreMovies) => dispatch(addMovies(moreMovies))
});

export default connect(null, mapDispatchToProps)(MovieList);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  favorites: PropTypes.array,
  addMovies: PropTypes.func
};
