import { favoritesReducer } from './favoritesReducer';
import * as actions from '../actions';

describe('favoritesReducer', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the state with a new favorite', () => {
    const movieId = 1;
    const expected = [1];
    const result = favoritesReducer(undefined, actions.addFavorite(movieId));

    expect(result).toEqual(expected);
  });

  it('should return the state with all the favorites', () => {
    const favorites = [1, 2, 3];
    const expected = [1, 2, 3];
    const result = favoritesReducer(undefined, actions.populateFavorites(favorites));
    
    expect(result).toEqual(expected);
  });

  it('should set the state to an empty array on sign out', () => {
    const expected = [];
    const result = favoritesReducer(undefined, actions.signOutUser());
    
    expect(result).toEqual(expected);
  });

})