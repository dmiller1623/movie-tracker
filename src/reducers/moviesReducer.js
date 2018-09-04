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

export const moviesLoading = (state = false, action) => {
  switch (action.type) {
    case 'MOVIES_LOADING':
      return action.moviesLoading;
    default:
      return state;
  }
};