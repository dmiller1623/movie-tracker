export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ('ADD_FAVORITE'):
      return [...state, action.movieId];
    case ('POPULATE_FAVORITES'):
      return action.favorites;
    case ('SIGN_OUT'):
      return [];
    default:
      return state;
  }
};