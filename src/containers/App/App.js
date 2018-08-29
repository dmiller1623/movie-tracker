import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Link } from 'react-router-dom';
import { getMovies } from '../../utilities/apiCalls/apiCalls';
import { populateMovies } from '../../actions';
import MovieList from '../../components/MovieList';
import NavBar from '../NavBar';

import './App.css';

class App extends Component {

  componentDidMount = async () => {
    const movies = await getMovies();
    this.props.populateMovies(movies);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
  populateMovies: (movies) => dispatch(populateMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);