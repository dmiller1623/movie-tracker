import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { getMovies } from '../../utilities/apiCalls/apiCalls';
import { populateMovies } from '../../actions';
import MovieList from '../../components/MovieList';
import SignUp from '../SignUp';
import Login from '../Login';

import './App.css';

class App extends Component {

  componentDidMount = async () => {
    const movies = await getMovies();
    this.props.populateMovies(movies);
  }

  render() {
    return (
      <div className="App">
        <Route exact path = '/' render={() => <MovieList movies={this.props.movies} favorites={this.props.favorites} /> } />
        <Route exact path = '/login' component={Login} />
        <Route exact path = '/signup' component={SignUp} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  favorites: state.favorites
})

const mapDispatchToProps = dispatch => ({
  populateMovies: (movies) => dispatch(populateMovies(movies))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));