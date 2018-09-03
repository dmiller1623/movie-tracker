import React from 'react';
import { shallow } from 'enzyme';
import {  MovieCard, mapStateToProps, mapDispatchToProps } from '../MovieCard';
import { addFavorite, populateFavorites } from '../../actions';
import { addNewFavorite, deleteFavorite } from '../../utilities/apiCalls/apiCalls';


jest.mock('../../utilities/apiCalls/apiCalls.js');

describe('MovieCard', () => {
  let wrapper;

  describe('MovieCard component', () => {
    const movie = {movie_id: 3, title: "Skulhedface", poster_path: "/1hOcS0G9q5eEzJEYeWjAa376yux.jpg", release_date: "1994-01-01", vote_average: 10};
    const populateFavorites = jest.fn();
    const addFavorite = jest.fn();
    const starColor = '#ffd24d';

    it('should render a movieCard with the correct starColor', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should return an alert if toggleFavorite is called and user is not logged in', async () => {
      const user = {};
      const favorites = [0, 1, 2, 3];
      const mockEvent = {stopPropagation: jest.fn()};

      wrapper = shallow(<MovieCard {...movie} starColor={starColor} user={user} favorites={favorites} addFavorite={addFavorite} populateFavorites={populateFavorites}/> );

      wrapper.instance().toggleFavorite(mockEvent);

      expect(deleteFavorite).not.toHaveBeenCalled();

    });

    it('should call deleteFavorite and populateFavorite with the correct params if toggleFavorite is called on a movie that is already in the users favorites', () => {
      const user = {id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com"};
      const favorites = [0, 1, 2, 3];
      const mockEvent = {stopPropagation: jest.fn()};

      wrapper = shallow(<MovieCard {...movie} starColor={starColor} user={user} favorites={favorites} addFavorite={addFavorite} populateFavorites={populateFavorites}/> );

      wrapper.instance().toggleFavorite(mockEvent);

      expect(deleteFavorite).toHaveBeenCalledWith(1, 3);
    });

    it('should call addNewFavorite and addFavorite with the correct params if toggleFavorite is called on a movie that is not already in the user favorites', () => {
      const user = {id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com"};
      const favorites = [0, 1, 2];
      const expected = {"addFavorite": addFavorite, "favorites": [0, 1, 2], "movie_id": 3, "populateFavorites": populateFavorites, "poster_path": "/1hOcS0G9q5eEzJEYeWjAa376yux.jpg", "release_date": "1994-01-01", "starColor": "#ffd24d", "title": "Skulhedface", "user": {"email": "tman2272@aol.com", "id": 1, "name": "Taylor", "password": "password"}, "user_id": 1, "vote_average": 10};
      const mockEvent = {stopPropagation: jest.fn()};

      wrapper = shallow(<MovieCard {...movie} starColor={starColor} user={user} favorites={favorites} addFavorite={addFavorite} populateFavorites={populateFavorites}/> );
      wrapper.instance().toggleFavorite(mockEvent);

      expect(addNewFavorite).toHaveBeenCalledWith(expected);
    });

    it('should call toggleFavorite when svg is clicked', () => {
      const user = {id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com"};
      const favorites = [0, 1, 2];
      const mockEvent = {stopPropagation: jest.fn()};
      wrapper = shallow(<MovieCard {...movie} starColor={starColor} user={user} favorites={favorites} addFavorite={addFavorite} populateFavorites={populateFavorites}/> );

      const spy = jest.spyOn(wrapper.instance(), 'toggleFavorite');
      wrapper.find('svg').simulate('click', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with a todos array', () => {
      const mockUser = {id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com"};
      const mockFavorites = [0, 1, 2];

      const mockState = {user: {id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com"}, favorites: [0, 1, 2]};

      const expected = { user: mockUser, favorites: mockFavorites};

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function addFavorite', () => {
      const mockMovieId = '5';
      const mockDispatch = jest.fn();
      const actionToDispatch = addFavorite(mockMovieId);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addFavorite(mockMovieId);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when using a function populateFavorites', () => {
      const mockMovieId = '5';
      const mockDispatch = jest.fn();
      const actionToDispatch = populateFavorites(mockMovieId);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.populateFavorites(mockMovieId);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });
  });

});