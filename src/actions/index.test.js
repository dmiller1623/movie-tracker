import * as actions from '../actions';

describe('actions', () => {
  const mockMovies = [{
    movie_id: 0,
    overview: "Bad Sci-Fi Movie Overview",
    poster_path: "/imagepath.jpg",
    release_date : "2013-12-30",
    title: "Bad Sci-fi",
    vote_average: 10
  }];
  const mockUser = {
    id: 1, 
    name: "Taylor", 
    password: "password", 
    email: "tman2272@aol.com"
  };
  const mockMovieId = 4;
  const mockFavorites = [0, 1, 2];

  it('should return a type of POPULATE_MOVIES, with movies', () => {
    const expected = {
      type: 'POPULATE_MOVIES',
      movies: [{
        movie_id: 0,
        overview: "Bad Sci-Fi Movie Overview",
        poster_path: "/imagepath.jpg",
        release_date : "2013-12-30",
        title: "Bad Sci-fi",
        vote_average: 10
      }]};
      
    const result = actions.populateMovies(mockMovies);
    expect(result).toEqual(expected);
  });
  it('should return a type of LOGIN_USER, with user', () => {
    const expected = {
      type: 'LOGIN_USER',
      user: {
        id: 1, 
        name: "Taylor", 
        password: "password", 
        email: "tman2272@aol.com"
      }
    };

    const result = actions.loginUser(mockUser);
    expect(result).toEqual(expected);
  });
  it('should return a type of SIGN_UP_USER, with user', () => {
    const expected = {
      type: 'SIGN_UP_USER',
      user: {
        id: 1, 
        name: "Taylor", 
        password: "password", 
        email: "tman2272@aol.com"
      }
    };

    const result = actions.signUpUser(mockUser);
    expect(result).toEqual(expected);
  });
  it('should return a type of SIGN_OUT, with user', () => {
    const expected = {
      type: 'SIGN_OUT'
    };

    const result = actions.signOutUser(mockUser);
    expect(result).toEqual(expected);
  });
  it('should return a type of ADD_FAVORITE, with user', () => {
    const expected = {
      type: 'ADD_FAVORITE',
      movieId: 4
    };

    const result = actions.addFavorite(mockMovieId);
    expect(result).toEqual(expected);
  });
  it('should return a type of POPULATE_FAVORITES, with user', () => {
    const expected = {
      type: 'POPULATE_FAVORITES',
      favorites: [0, 1, 2]
    };

    const result = actions.populateFavorites(mockFavorites);
    expect(result).toEqual(expected);
  });
});