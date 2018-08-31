import { moviesReducer} from './moviesReducer';
import * as actions from '../actions';

describe('moviesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = moviesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the state with movies', () => {
    const mockMovies = {
      type: 'POPULATE_MOVIES',
      movies: [{
        movie_id: 0,
        overview: "Bad Sci-Fi Movie Overview",
        poster_path: "/imagepath.jpg",
        release_date : "2013-12-30",
        title: "Bad Sci-fi",
        vote_average: 10
      }]};

    const expected = {
      movies: [{
        movie_id: 0,
        overview: "Bad Sci-Fi Movie Overview",
        poster_path: "/imagepath.jpg",
        release_date : "2013-12-30",
        title: "Bad Sci-fi",
        vote_average: 10
      }],
      type: 'POPULATE_MOVIES'};

    const result = moviesReducer(undefined, actions.populateMovies(mockMovies));

    expect(result).toEqual(expected);
  });
});