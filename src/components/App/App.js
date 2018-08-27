import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import apiKey from '../../apiKey.js'
import cleanData from '../../helper.js'

import './App.css';

class App extends Component {

  componentDidMount = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=1`
      console.log(url)
    try {
      const response = await fetch(url)
      const movieData = await response.json() 
      const movies =  await cleanData(movieData)
      console.log(movies)
    } catch(error) {
      throw new Error(error.message)
    }
  }

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
