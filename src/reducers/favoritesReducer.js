export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ('ADD_FAVORITE'):
      return [...state, action.movie.id];
    case ('POPULATE_FAVORITES'):
      return action.favorites;
    default:
      return state;
  }
};