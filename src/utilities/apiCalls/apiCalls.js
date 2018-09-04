import apiKey from '../../apiKey.js';
import cleanData from '../helper/helper.js';

export const getFavorites = async userId => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/users/${userId}/favorites`
    );
    if (response.status !== 200) {
      return [];
    } else {
      const favorites = await response.json();
      const favoriteMovieIds = favorites.data.map(
        favorite => favorite.movie_id
      );
      return favoriteMovieIds;
    }
  } catch (error) {
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
      alert(
        'User already exists, please try another email or login to an account'
      );
      return {};
    } else {
      return await response.json();
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
  overview
}) => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/users/favorites/new',
      {
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
      }
    );
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteFavorite = async (userId, movieId) => {
  try {
    await fetch(
      `http://localhost:3000/api/users/${userId}/favorites/${movieId}`,
      {
        method: 'DELETE'
      }
    );
  } catch (error) {
    throw new Error(error.message);
  }
};
