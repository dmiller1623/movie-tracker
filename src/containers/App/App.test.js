import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter} from 'react-router-dom';

import App from './App.js';
import {  mapStateToProps, mapDispatchToProps } from './App.js';
import { populateMovies } from '../../actions'


describe('App', () => {

  describe('App component', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(
      <BrowserRouter>
        <App />
      </BrowserRouter>);
  
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('matchStateToProps', () => {
    it('should return an object with a movies and favorites array', () => {
      const mockState = {
        movies: [{
          movie_id: 0,
          title: 'test',
          poster_path: 'test',
          release_date: 2018-9-1,
          vote_average: 1,
          overview: 'test'
        }],
        favorites: [0]
      };
      const expected = {
        movies: [{
          movie_id: 0,
          title: 'test',
          poster_path: 'test',
          release_date: 2018-9-1,
          vote_average: 1,
          overview: 'test'
        }],
        favorites: [0]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  });


  describe('matchDispatchToProps', () => {
    it('should call dispatch when using a function MDTP', () => {
      const movies = [{
        movie_id: 0,
        title: 'test',
        poster_path: 'test',
        release_date: 2018-9-1,
        vote_average: 1,
        overview: 'test'
      }];
      const mockDispatch = jest.fn();
      const actionToDispatch = populateMovies(movies);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.populateMovies(movies);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});
