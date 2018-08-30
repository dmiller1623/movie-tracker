import apiKey from '../../apiKey.js';
import cleanData from '../helper/helper.js';

export const getMovies = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=1`;
  try {
    const response = await fetch(url);
    const movieData = await response.json() ;
    const unresolvedMovies = await cleanData(movieData);
    return Promise.all(unresolvedMovies);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    if (response.status !== 200) {
      alert('Email and/or password do not match, please try again');
      return {};
    } else {
      const results = await response.json();
      return results.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
  
};

export const getFavorites = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${userId}/favorites`);
    if (response.status !== 200) {
      return [];
    } else {
      const favorites = await response.json();
      const favoriteMovieIds = favorites.data.map( favorite => favorite.movie_id );
      return favoriteMovieIds;
    }
  } catch(error) {
    throw new Error(error.message);
  }
};

export const addNewUser = async (name, email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, 
        email,
        password
      })
    });
    if (response.status !== 200) {
      alert('User already exists, please try another email or login to an account');
      return {};
    } else {
      return await getUser(email, password);
    }  
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addNewFavorite = async ({
  movie_id,
  user_id,
  title,
  poster_path,
  release_date,
  vote_average,
  overview}) => {
  try {
    const response = await fetch('http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        movie_id,
        user_id,
        title,
        poster_path,
        release_date,
        vote_average,
        overview
      })
    });
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

