export const populateMovies = movies => ({
  type: 'POPULATE_MOVIES',
  movies
});

export const moviesLoading = bool => ({
  type: 'MOVIES_LOADING',
  moviesLoading: bool
});

export const addMovies = movies => ({
  type: 'ADD_MOVIES',
  movies
});

export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
});

export const signUpUser = user => ({
  type: 'SIGN_UP_USER',
  user
});

export const signOutUser = () => ({
  type: 'SIGN_OUT'
});

export const addFavorite = movieId => ({
  type: 'ADD_FAVORITE',
  movieId
});

export const populateFavorites = favorites => ({
  type: 'POPULATE_FAVORITES',
  favorites
});
