export const populateMovies = (movies) => ({
  type: 'POPULATE_MOVIES',
  movies
});

export const loginUser = (email, password) => ({
  type: 'LOGIN_USER',
  email,
  password
});

export const signUpUser = (email, password) => ({
  type: 'SIGNUP_USER',
  email,
  password
});
