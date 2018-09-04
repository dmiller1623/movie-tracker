import apiKey from '../apiKey';
import cleanData from '../utilities/helper/helper';
import { moviesLoading, populateMovies } from '../actions';

export const getMovies = (page = 1) => async dispatch => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=${page}`;
  try {
    dispatch(moviesLoading(true));
    const response = await fetch(url);
    if (!response.ok) {
      throw Error (response.statusText);
    }
    dispatch(moviesLoading(false));
    const movieData = await response.json();
    const unresolvedMovies = await cleanData(movieData);
    dispatch(populateMovies(unresolvedMovies));
    // return Promise.all(unresolvedMovies);
  } catch (error) {
    throw new Error(error.message);
  }
};