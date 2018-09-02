import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieList from '../../components/MovieList';
import SignUp from '../SignUp';
import Login from '../Login';
import NavBar from '../../containers/NavBar';

import FavoritesList from '../../components/FavoritesList';
import { loginUser, populateFavorites, populateMovies } from '../../actions';
import { getFavorites, getMovies } from '../../utilities/apiCalls/apiCalls';

import './App.css';

export class App extends Component {
  
  componentDidMount = async () => {
    const movies = await getMovies();
    this.props.populateMovies(movies);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      var user = JSON.parse(storedUser);
      this.props.loginUser(user);
      const favorites = await getFavorites(user.id);
      this.props.populateFavorites(favorites);
    }
  }

  render() {
    const { movies, favorites } = this.props;

    return (
      <div className="App">
        <header>
          <img 
            className='logo'
            onClick={() => this.props.history.push('/')}
            src={require('../../assets/shitty-logo.png')}
            alt='sh**ty sci-fi' />    
          <NavBar />
        </header>
        <Route exact path = '/login' component={Login} />
        <Route exact path = '/signup' component={SignUp} />
        <Route exact path = '/' render={() => <MovieList movies={movies} favorites={favorites} /> } />
        <Route exact path = '/favorites' render={() => <FavoritesList movies={movies} favorites={favorites} />} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  populateMovies: (movies) => dispatch(populateMovies(movies)),
  loginUser: (email, password) => dispatch(loginUser(email, password)),
  populateFavorites: (favorites) => dispatch(populateFavorites(favorites))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  favorites: PropTypes.arrayOf(PropTypes.number),
  populateFavorites: PropTypes.func,
  populateMovies: PropTypes.func,
  loginUser: PropTypes.func
};
