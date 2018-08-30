import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import MovieList from '../../components/MovieList';
import SignUp from '../SignUp';
import Login from '../Login';
import FavoritesList from '../../components/FavoritesList';
import { populateMovies } from '../../actions';
import { getMovies } from '../../utilities/apiCalls/apiCalls';

import './App.css';

class App extends Component {
  
  componentDidMount = async () => {
    const movies = await getMovies();
    this.props.populateMovies(movies);
  }

  render() {
    const { movies, favorites } = this.props;

    return (
      <div className="App">
        <Route exact path = '/' render={() => <MovieList movies={movies} favorites={favorites} /> } />
        <Route exact path = '/login' component={Login} />
        <Route exact path = '/signup' component={SignUp} />
        <Route exact path = '/favorites' render={() => <FavoritesList movies={movies} favorites={favorites} />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  populateMovies: (movies) => dispatch(populateMovies(movies))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
