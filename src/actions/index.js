export const populateMovies = (movies) => ({
  type: 'POPULATE_MOVIES',
  movies
});

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
});

export const signUpUser = (email, password) => ({
  type: 'SIGNUP_USER',
  email,
  password
});

export const signOutUser = () => {
  type: 'SIGN_OUT'

}
