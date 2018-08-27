import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import getMovies from '../../utilities/apiCalls/apiCalls';


import './App.css';

class App extends Component {

  componentDidMount = async () => {
    const movies = await getMovies();
    console.log(movies)
  }

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
