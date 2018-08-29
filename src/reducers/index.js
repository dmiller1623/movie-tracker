import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { loginUserReducer } from './loginUserReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: loginUserReducer
});

export default rootReducer;