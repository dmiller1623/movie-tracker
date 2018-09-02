import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MovieCard from '../../containers/MovieCard';
import './styles.css';
import {getMovies} from '../../utilities/apiCalls/apiCalls';
import { addMovies } from '../../actions';

class MovieList extends Component {

  addResults = async () => {
    const page = Math.floor(this.props.movies.length) / 8;
    const moreMovies = await getMovies(page + 1);
    this.props.addMovies(moreMovies);
  }
  
  render() {
    const displayedMovies = this.props.movies.map( (movie, index) => {
      const starColor = this.props.favorites.includes(movie.movie_id) ? '#ffd24d' : '#f2f2f2';
      return <MovieCard {...movie} key={index} starColor={starColor}/>;
    });

    return (
      <main>
        {displayedMovies}
        <article className="more-btn">
          <h4 onClick={() => this.addResults()} className="more-text">SEE MORE</h4>
        </article>
      </main>
    );
  }


<<<<<<< HEAD
const MovieList = ({ movies, favorites = [] }) => {
  const displayedMovies = movies.map( (movie, index) => {
    const starColor = favorites.includes(movie.movie_id) ? '#ffd24d' : '#f2f2f2';
    return <MovieCard {...movie} key={index} starColor={starColor}/>;
  });

  return (
    <main>
      {displayedMovies}
    </main>
  );
};
=======
}
>>>>>>> Add feat to see more results

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (moreMovies) => dispatch(addMovies(moreMovies))
});

export default connect(null, mapDispatchToProps)(MovieList);


MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  favorites: PropTypes.arrayOf(PropTypes.number)
};
