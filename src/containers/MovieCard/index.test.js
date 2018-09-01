import React from 'react';
import { shallow, mount } from 'enzyme';
import {  MovieCard, mapDispatchToProps } from '../MovieCard';
import { addFavorite } from '../../actions';



describe('MovieCard', () => {
  let wrapper;
  describe('MovieCard component', () => {
    wrapper = mount(<MovieCard />);
    it('should update state when user enters something in an input', () => {

    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function mapDispatchToProps', () => {
      const mockMovieId = 5;

      const mockDispatch = jest.fn();
      const actionToDispatch = addFavorite(mockMovieId);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addFavorite(mockMovieId);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });
  });
});