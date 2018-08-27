import apiKey from '../../apiKey.js';
import cleanData from '../helper/helper.js'

const getMovies = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=1`;
  try {
    const response = await fetch(url);
    const movieData = await response.json() ;
    const unresolvedMovies = await cleanData(movieData);
    return Promise.all(unresolvedMovies);
  } catch(error) {
    throw new Error(error.message);
  }
}
export default getMovies;