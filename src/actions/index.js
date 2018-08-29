export const populateMovies = (movies) => ({
  type: 'POPULATE_MOVIES',
  movies
});

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
});

export const signUpUser = (user) => ({
  type: 'SIGN_UP_USER',
  user
});

export const signOutUser = () => ({
  type: 'SIGN_OUT'
});
