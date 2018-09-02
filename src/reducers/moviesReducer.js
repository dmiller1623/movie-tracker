export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_MOVIES':
      return action.movies;
    case 'ADD_MOVIES':
      return [...state, ...action.movies];
    default:
      return state;
  }
};