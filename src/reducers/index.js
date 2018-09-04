import { combineReducers } from 'redux';
import { moviesReducer, moviesLoading } from './moviesReducer';
import { userReducer } from './userReducer';
import { favoritesReducer } from './favoritesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  favorites: favoritesReducer,
  moviesLoading
});

export default rootReducer;