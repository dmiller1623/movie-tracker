import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';

console.log(userReducer)

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer
});

export default rootReducer;