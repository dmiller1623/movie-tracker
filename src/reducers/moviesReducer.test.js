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

  it('should add more movies to the state', () => {
    const currentState = [{
      movie_id: 0,
      overview: "Bad Sci-Fi Movie Overview",
      poster_path: "/imagepath.jpg",
      release_date : "2013-12-30",
      title: "Bad Sci-fi",
      vote_average: 10
    }]
    const moreMovies = [{
      movie_id: 1,
      title: "Playmobil: Future Planet",
      poster_path:  "/blKu0AnRxXIMAv17OLnx7fIvS2g.jpg",
      release_date: "2011-01-01",
      vote_average: 10,
      overview: "" 
     }];
    
    const expected = [{
      movie_id: 0,
      overview: "Bad Sci-Fi Movie Overview",
      poster_path: "/imagepath.jpg",
      release_date : "2013-12-30",
      title: "Bad Sci-fi",
      vote_average: 10
    }, {
      movie_id: 1,
      title: "Playmobil: Future Planet",
      poster_path:  "/blKu0AnRxXIMAv17OLnx7fIvS2g.jpg",
      release_date: "2011-01-01",
      vote_average: 10,
      overview: "" 
    }];

    const results = moviesReducer(currentState, actions.addMovies(moreMovies))
    expect(results).toEqual(expected)
  })
});