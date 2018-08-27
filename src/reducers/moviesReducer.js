export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'POPULATE_MOVIES':
      return action.movies;
    default:
      return state;
  }
};